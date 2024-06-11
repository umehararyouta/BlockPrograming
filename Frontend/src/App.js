import './App.css';
import React, {useEffect,useRef, useState} from 'react';
import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import {pythonGenerator} from 'blockly/python';
import * as En from 'blockly/msg/en';
import WorkspaceConfig from './Blockly/workspace ';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography,CssBaseline, Button, Container, Grid, Paper, TextField,Box, Stack } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

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
    const[output,setOutput] = useState('');
    const [PythonCode, setPythonCode] = useState('')

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
          indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
      });
      setPyodide(pyodide)
    };
    loadPyodide();
  },[]);
  

  const runPythonCode = async (code) => {
    if (pyodide){
      try{
        let output = await pyodide.runPythonAsync(code);
        console.log(pyodide.runPython('print(1+2)'));
        console.log(output);
        setOutput(output);
        }
      catch(e){
        console.error('pythonerror:',e);
      }
    }
  }
  const runcode = async () => {
    const code = pythonGenerator.workspaceToCode(workspaceRef.current);
    console.log(code);
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
            rows={7}
            fullWidth
            multiline
            variant='outlined'
            />
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
              value={output}
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
