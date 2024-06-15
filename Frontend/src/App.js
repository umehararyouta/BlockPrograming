import './App.css';
import React, {useEffect,useRef, useState} from 'react';
import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import {pythonGenerator} from 'blockly/python';
import * as En from 'blockly/msg/en';
import WorkspaceConfig from './Blockly/workspace ';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography,CssBaseline, Button, Container, Grid, Paper, TextField,Box, Stack, Table,TableBody,TableCell,TableRow,TableHead } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import problems from './problems/problems.json';
import theme from './theme';
import customblocks from './Blockly/customblock';

import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DownloadIcon from '@mui/icons-material/Download';

//これがないとバグる
Blockly.setLocale(En);


function App() {
  // 一度実行されたかどうかの判定をrefで
    const blocklyDivRef = useRef(null);
    const workspaceRef = useRef(null);
    const[pyodide,setPyodide] = useState(null);
    const[output,setOutput] = useState([]);
    const [PythonCode, setPythonCode] = useState('')
    const [selectedId,setSelectedId] = useState(1);
    const [inputText,setInputText] = useState('');
    const [filteredProblems,setFIlteredProblems] = useState([]);

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
  useEffect(() => {
    const filteredProblems = problems.filter(problem => problem.id === selectedId);
    setInputText(filteredProblems.map(problem =>problem.input_output.map(io => io[0])));
    setFIlteredProblems(filteredProblems)
    console.log(filteredProblems)
    console.log(filteredProblems.map(problem =>problem.input_output.map(io => io[0])))
  },[])


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
  

  const runPythonCode = async (code) => {
    if (pyodide){
      try{
        const total_output =[]
        for (let i = 0; i < inputText.map(input => input.length); i++){
          const scripttext = `
import sys
import io
from io import StringIO

_INPUT = """\
${inputText[0][i]}
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
          }
          setOutput(total_output);
        }
      catch(e){
        console.error('pythonerror:',e);
      }
    }
  }
  const runcode = async () => {
    const code = pythonGenerator.workspaceToCode(workspaceRef.current);
    await runPythonCode(code);
  };

  const downloadPythonCode = () => {
    const blob = new Blob([PythonCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'executed_code.py';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar disableGutters>
          <Typography variant='h6' sx={{
            fontFamily: 'monospace',
            marginRight: 2,
            marginLeft: 5,
          }}>
            Block
          </Typography>
          <Box sx={{ flexGrow: 1 ,marginRight:3}} />
          <Button color="inherit"sx={{marginRight:3}} startIcon={<MenuBookIcon />}>問題一覧</Button>
          <Button color="inherit"sx={{marginRight:3}} startIcon={<HomeIcon />}>メインメニュー</Button>
          <Button color="inherit"sx={{marginRight:3}} startIcon={<LoginIcon />}>ログイン</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth={'xl'} component={Paper} sx={{margin:'auto',padding:5,marginTop:3}}>
        <Grid container>
          <Grid item xs={6} md={6}>
            <TextField
            readOnly
            rows={8}
            fullWidth
            multiline
            variant='outlined'
            value={filteredProblems.map((problems) => problems.question)}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right">入力される文字</TableCell>
                  <TableCell align="right">期待する出力</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProblems.map((problem) => (
                  problem.input_output.map((input_output,index) => (
                    <TableRow key={`${problem.id}-${index}`}>
                      <TableCell align="right">{input_output[0]}</TableCell>
                      <TableCell align="right">{input_output[1]}</TableCell>
                    </TableRow>
                  ))
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={'xl'} component={Paper}  sx={{margin:'auto',padding:1,marginTop:1}}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'row' }}>
              <Button color="inherit"sx={{marginRight:1}} startIcon={<PlayArrowIcon/>} onClick={runcode}>実行</Button>
              <Button color="inherit"sx={{marginRight:1}} startIcon={<RestartAltIcon/>}>リセット</Button>
              <Button color="inherit"sx={{marginRight:1}} startIcon={<DownloadIcon/>} onClick={downloadPythonCode}>コードをダウンロード</Button>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={'xl'} component={Paper}  sx={{margin:'auto',padding:2,marginTop:1}}>
        <Grid container spacing={3} sx={{ height: '100%' }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <div id="blocklyDiv" ref={blocklyDivRef} style={{ flexGrow: 1 }}></div>
        </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <TextField
              fullWidth
              multiline
              variant='outlined'
              label='pythonコードがここに自動で生成されます'
              value={PythonCode}
              rows={14}
              inputProps={{
                readOnly: true,
                style:{
                  overflowWrap:'anywhere',
                  whiteSpace:'pre-line',
                  color:"#000000",
              }
              }}
              />
              <TextField
              fullWidth
              multiline
              variant='outlined'
              label='実行結果'
              rows={2}
              value={output.join(' ')}
              inputProps={{
                readOnly: true,
                style:{
                  overflowWrap:'anywhere',
                  whiteSpace:'pre-line',
                  color:"#000000",
              }
              }}
            />
            </Stack>
          </Grid>
        </Grid>
      </Container>

    </ThemeProvider>
  );
}

export default App;
