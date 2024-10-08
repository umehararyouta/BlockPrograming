import '../App.css';
import React, {useEffect,useRef, useState} from 'react';
import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import {pythonGenerator} from 'blockly/python';
import * as En from 'blockly/msg/en';
import WorkspaceConfig from '../Blockly/workspace ';
import { CssBaseline, Button,  Grid, Paper, TextField, Stack, FormControl, InputLabel,NativeSelect } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import theme from '../theme';
import customblocks from '../Blockly/customblock';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DownloadIcon from '@mui/icons-material/Download';

import toolboxjp from '../Blockly/toolboxjp';
import toolboxConfig from '../Blockly/toolbox';

//これがないとバグる
Blockly.setLocale(En);


function ProgramPage() {
  // 一度実行されたかどうかの判定をrefで
    const blocklyDivRef = useRef(null);
    const workspaceRef = useRef(null);
    const[pyodide,setPyodide] = useState(null);
    const[output,setOutput] = useState([]);
    const [PythonCode, setPythonCode] = useState('')
    const [selectedId,setSelectedId] = useState(1);
    const [inputText,setInputText] = useState('');
    const [errorText,setErrorText] = useState('');
  //Blockly workspaceを呼び出し
  useEffect(() => {  
    if(workspaceRef.current === null){
      customblocks();
      workspaceRef.current = Blockly.inject(blocklyDivRef.current, WorkspaceConfig);

      workspaceRef.current.addChangeListener(() => {
        const code = pythonGenerator.workspaceToCode(workspaceRef.current);
        setPythonCode(code);
      });

    }
  },[]);

  //Pyodideの呼び出し
  //pyodideはPythonインタプリタをWeb上で動かせるやつ
  useEffect(()=>{
    
    const loadPyodide = async() => {
      const pyodide = await window.loadPyodide({
          indexURL : "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/"
      });
      setPyodide(pyodide)
    };
    loadPyodide();
  },[]);
  //Pythonコードを実行出来るようにする関数
  const runPythonCode = async (code) => {
    if (pyodide){
      try{
        const total_output =[]
          const scripttext = `
import sys
import io
from io import StringIO

_INPUT = """\
${inputText}
"""
sys.stdin = io.StringIO(_INPUT)

# 標準出力をリダイレクト
old_stdout = sys.stdout
sys.stdout = mystdout = StringIO()

# ユーザーのコードを実行
${code}
# 標準出力の内容を取得
results = mystdout.getvalue()

# 標準出力を元に戻す
sys.stdout = old_stdout
results
`;    
          console.log(scripttext);  
          const output = await pyodide.runPythonAsync(scripttext);
          console.log(output)
          total_output.push(output)
          setOutput(total_output);
        }
      catch(e){
        console.error('pythonerror:',e);
        const errors = e.message.split('\n').filter(line => line.trim() !== '').pop();
        console.log(errors);
        setErrorText(errors);
      }
    }
  }
  //pythonコードを実行させる関数
  const runcode = async () => {
    const code = pythonGenerator.workspaceToCode(workspaceRef.current);
    await runPythonCode(code);
  };
  //ButtonのonClickでPythonコードをダウンロードできるようにするやつ
  //ダウンロードURLを作成して、Blob型のPythonコードをダウンロードできるように
  const downloadPythonCode = () => {
    const blob = new Blob([PythonCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'executed_code.py';
    a.click();
    URL.revokeObjectURL(url);
  };
  //OnChnageでBlocklyのブロックをPython、日本語表記に切り替えるやつ
  const onChnagelang = (event) => {
    const workspace = Blockly.getMainWorkspace();
    if (event.target.value === "japanese"){
      workspace.updateToolbox(toolboxjp);
    }else if (event.target.value === "python"){
      workspace.updateToolbox(toolboxConfig);
    }
    workspace.clear();
  };

  const onChnageConsole = (event) => {
    setInputText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container maxWidth="xl" spacing={2} sx={{ margin:'auto' ,paddingTop: 10,marginTop:2}}>
        <Grid item xs={6} >
          <TextField 
            fullWidth
            multiline
            variant='outlined'
            label='コンソール'
            rows={3}
            component={Paper}
            onChange={onChnageConsole}
          />
        </Grid>
        <Grid item xs={6} >
          <TextField
                fullWidth
                multiline
                variant='outlined'
                label='実行結果'
                rows={3}
                value={output.join(' ')}
                inputProps={{
                  readOnly: true,
                  style:{
                    overflowWrap:'anywhere',
                    whiteSpace:'pre-line',
                    color:"#000000",
                }
                }}
                component={Paper}
              />
        </Grid>
        <Grid item xs={6}> 
          <Stack  direction="row" alignItems="center" component={Paper} sx={{paddingTop:'7px'}}>
            <Button color="inherit" startIcon={<PlayArrowIcon />} onClick={runcode}>実行</Button>
            <Button color="inherit" startIcon={<RestartAltIcon />}>リセット</Button>
            <Button color="inherit" startIcon={<DownloadIcon />} onClick={downloadPythonCode}>コードをダウンロード</Button>
            <FormControl>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">ブロック表記</InputLabel>
              <NativeSelect
                defaultValue="japanese"
                inputProps={{
                  name: 'Notation',
                  id: 'uncontrolled-native',
                }}
                onChange={onChnagelang}
              >
                <option value="japanese">日本語</option>
                <option value="python">Python</option>
              </NativeSelect>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={6} >
          <TextField
            fullWidth
            multiline
            maxRows={1}
            variant='outlined'
            label='エラー'
            component={Paper}
            value={errorText}
          />
        </Grid>
      </Grid>
      <Grid container maxWidth='xl' spacing={2} sx={{margin:'auto'}}>
        <Grid item xs={6} sx={{ display: 'flex'}}>
          <div id="blocklyDiv" ref={blocklyDivRef} style={{ flexGrow: 1 }}></div>
      </Grid>
        <Grid item xs={6} >
            <TextField
            fullWidth
            multiline
            variant='outlined'
            label='pythonコードがここに自動で生成されます'
            value={PythonCode}
            rows={20}
            inputProps={{
              readOnly: true,
              style:{
                overflowWrap:'anywhere',
                whiteSpace:'pre-line',
                color:"#000000",
            }
            }}
            component={Paper}
            />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ProgramPage;
