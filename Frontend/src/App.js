import './App.css';
import React ,{useState,useEffect} from 'react';
import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import * as En from 'blockly/msg/en';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography,CssBaseline, Button,Box} from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import theme from './theme';

import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { BrowserRouter as Router,Routes, Route,Link, useLocation} from 'react-router-dom';

import ProgramPage from './Routes/ProgramPage';
import Problems from './Routes/Problems';
import Home from './Routes/Home';
import Education from './Routes/Education';
import Signup from './Routes/Signup';
import Login from './Routes/Login';
import axios from 'axios';

// Blocklyの言語設定
Blockly.setLocale(En);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />  {/* useLocation() を Router 内部で使用するコンポーネントに移動 */}
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checklogin = async () => {
      console.log('...checking login');
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://127.0.0.1:5000/protected', { headers: { Authorization: `Bearer ${token}` } ,timeout:5000},);
          console.log('login successful', response);
          setIsLogin(true);
        } else {
          console.log('login failed: token not found');
        }
      } catch (e) {
        console.log('login failed: server error');
      }
    };
    checklogin();
  }, [location]);

  const onClickLogout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
    console.log('logout successful');
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ fontFamily: 'monospace', marginRight: 2, marginLeft: 5 }}>
            Blockで学ぶPython
          </Typography>
          <Box sx={{ flexGrow: 1, marginRight: 3 }} />
          <Button component={Link} to="/problems" color="inherit" sx={{ marginRight: 3 }} startIcon={<MenuBookIcon />}>
            講義一覧
          </Button>
          <Button component={Link} to="/" color="inherit" sx={{ marginRight: 3 }} startIcon={<HomeIcon />}>
            メインメニュー
          </Button>
          {isLogin ? (
            <Button onClick={onClickLogout} color="inherit" sx={{ marginRight: 3 }} startIcon={<LoginIcon />}>
              ログアウト
            </Button>
          ) : (
            <Button component={Link} to="/login" color="inherit" sx={{ marginRight: 3 }} startIcon={<LoginIcon />}>
              ログイン
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/programpage" element={<ProgramPage />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/education" element={<Education />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
