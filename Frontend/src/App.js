import './App.css';
import React, {useEffect,useRef} from 'react';
import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import * as libraryBlocks from 'blockly/blocks';
import {javascriptGenerator} from 'blockly/javascript';
import * as En from 'blockly/msg/en';
import WorkspaceConfig from './Blockly/workspace ';

import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography,CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import toolboxConfig from './Blockly/toolbox';

Blockly.setLocale(En);
function App() {

    const blocklyDivRef = useRef(null);
    const workspaceRef = useRef(null);

  useEffect(() => {  
    if(workspaceRef.current === null){
      workspaceRef.current = Blockly.inject(blocklyDivRef.current, WorkspaceConfig);
    }
},[]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar disableGutters>
          <Typography variant='h6' sx={{
            fontFamily:'monospace',
            marginRight:2,
            marginLeft:5,

          }}>
            Block
          </Typography>
        </Toolbar>
      </AppBar>
      <div id="blocklyDiv" ref={blocklyDivRef} style={{ height: '480px', width: '600px' }}></div>
    </ThemeProvider>
  );
}

export default App;
