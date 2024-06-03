import './App.css';
import React, {useEffect} from 'react';
import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import * as libraryBlocks from 'blockly/blocks';
import {javascriptGenerator} from 'blockly/javascript';
import * as En from 'blockly/msg/en';
Blockly.setLocale(En);
function App() {
  useEffect(() => {  
    const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "logic_compare"
      },
      {
        "kind": "block",
        "type": "math_number"
      },
      {
        "kind": "block",
        "type": "math_arithmetic"
      },
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind": "block",
        "type": "text_print"
      },
    ]
  };
  const workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
},[]);

  return (
    <div id="blocklyDiv"style={{ height: '480px', width: '600px' }}></div>
    
  );
}

export default App;
