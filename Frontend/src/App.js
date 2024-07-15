import './App.css';
import React, {useEffect,useRef, useState} from 'react';
import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import * as En from 'blockly/msg/en';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography,CssBaseline, Button, Container, Grid, Paper, TextField,Box, Stack, Table,TableBody,TableCell,TableRow,TableHead } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import theme from './theme';

import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';


import { BrowserRouter as Router,Routes, Route,Link} from 'react-router-dom';

import ProgramPage from './Routes/ProgramPage';
import Problems from './Routes/Problems';
import Home from './Routes/Home';




//これがないとバグる
Blockly.setLocale(En);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
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
          <Button component={Link} to="/problems" color="inherit"sx={{marginRight:3}} startIcon={<MenuBookIcon />}>問題一覧</Button>
          <Button color="inherit"sx={{marginRight:3}} startIcon={<HomeIcon />}>メインメニュー</Button>
          <Button color="inherit"sx={{marginRight:3}} startIcon={<LoginIcon />}>ログイン</Button>
        </Toolbar>
      </AppBar>
        <Routes>
          <Route path = "/programpage" element={<ProgramPage />}/> 
          <Route path = "/problems" element={<Problems />}/> 
          <Route path = "/" element={<Home />}/> 
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
