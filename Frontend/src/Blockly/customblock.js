import * as Blockly from 'blockly/core';
import { pythonGenerator,Order } from 'blockly/python';

const customblocks =()=>{
    Blockly.Blocks['if']={
        init:function(){
            this.jsonInit({
                "type": "if",
                "message0": "if %1 %2 %3 %4",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "if_main"
                  },
                  {
                    "type": "field_dropdown",
                    "name": "if_dropdown",
                    "options": [
                      [
                        "==",
                        "equal"
                      ],
                      [
                        "!=",
                        "not_equal"
                      ],
                      [
                        ">",
                        "less_then"
                      ],
                      [
                        "<",
                        "more_than"
                      ],
                      [
                        ">=",
                        "below"
                      ],
                      [
                        "<=",
                        "avobe"
                      ]
                    ]
                  },
                  {
                    "type": "input_value",
                    "name": "NAME"
                  },
                  {
                    "type": "input_statement",
                    "name": "if_statement"
                  }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 330,
                "tooltip": "",
                "helpUrl": ""
            });
        }
    };
    Blockly.Blocks['string']={
      init:function(){
          this.jsonInit({
            "type": "string",
            "message0": "\" %1 \"",
            "args0": [
              {
                "type": "field_input",
                "name": "String_Text",
                "text": ""
              }
            ],
            "inputsInline": true,
            "output": "String",
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          });
        }
    };
    Blockly.Blocks['print']={
      init:function(){
          this.jsonInit(
            {
              "type": "print",
              "message0": "Print( %1 )",
              "args0": [
                {
                  "type": "input_value",
                  "name": "Print",
                  "check": [
                    "Number",
                    "String"
                  ]
                }
              ],
              "inputsInline": true,
              "previousStatement": null,
              "nextStatement": null,
              "colour": 230,
              "tooltip": "",
              "helpUrl": ""
            });
        }
    };
    Blockly.Blocks['input']={
      init:function(){
        this.jsonInit(
          {
            "type": "print",
            "message0": "Print( %1 )",
            "args0": [
              {
                "type": "input_value",
                "name": "Print",
                "check": [
                  "Number",
                  "String"
                ]
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          }
        );
      }
    };
    Blockly.Blocks['num']={
      init:function(){
        this.jsonInit(
          {
            "type": "num",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2",
            "args0": [
              {
                "type": "field_number",
                "name": "NAME",
                "value": 0
              },
              {
                "type": "input_value",
                "name": "NAME"
              }
            ],
            "output": "Number",
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['bool']={
      init:function(){
        this.jsonInit(
          {
            "type": "bool",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "TF",
                "options": [
                  [
                    "Ture",
                    "True"
                  ],
                  [
                    "False",
                    "False"
                  ]
                ]
              },
              {
                "type": "input_value",
                "name": "bool"
              }
            ],
            "output": "Boolean",
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['math']={
      init:function(){
        this.jsonInit(
          {
            "type": "math",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "NAME",
                "options": [
                  [
                    "+",
                    "plus"
                  ],
                  [
                    "-",
                    "minus"
                  ],
                  [
                    "*",
                    "multi"
                  ],
                  [
                    "/",
                    "division"
                  ],
                  [
                    "//",
                    "Tdivision"
                  ],
                  [
                    "%",
                    "surplus"
                  ],
                  [
                    "**",
                    "exponentiation"
                  ]
                ]
              },
              {
                "type": "input_value",
                "name": "math"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['variable']={
      init:function(){
        this.jsonInit(
          {
            "type": "variable",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 = %2",
            "args0": [
              {
                "type": "input_value",
                "name": "v"
              },
              {
                "type": "input_value",
                "name": "NAME"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225,
            "inputsInline": true
          }
            
        );
      }
    };
    Blockly.Blocks['forvariavle']={
      init:function(){
        this.jsonInit(
          {
            "type": "forvariavle",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2",
            "args0": [
              {
                "type": "field_input",
                "name": "NAME",
                "text": ""
              },
              {
                "type": "input_value",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['array']={
      init:function(){
        this.jsonInit(
          {
            "type": "array",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 =[ %2 ] %3",
            "args0": [
              {
                "type": "input_value",
                "name": "a"
              },
              {
                "type": "input_value",
                "name": "b"
              },
              {
                "type": "input_dummy",
                "name": "c"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225,
            "inputsInline": true
          }         
        );
      }
    };
 Blockly.Blocks['dict']={
      init:function(){
        this.jsonInit(
          {
            "type": "dict",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 ={ %2 } %3",
            "args0": [
              {
                "type": "input_value",
                "name": "a"
              },
              {
                "type": "input_value",
                "name": "b"
              },
              {
                "type": "input_dummy",
                "name": "c"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225,
            "inputsInline": true
          }
        );
      }
    };
    Blockly.Blocks['exit']={
      init:function(){
        this.jsonInit(
          {
            "type": "exit",
            "tooltip": "",
            "helpUrl": "",
            "message0": "exit() %1",
            "args0": [
              {
                "type": "input_dummy",
                "name": "a"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['int']={
      init:function(){
        this.jsonInit(
          {
            "type": "int",
            "tooltip": "",
            "helpUrl": "",
            "message0": "int( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "a"
              },
              {
                "type": "input_dummy",
                "name": "b"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['str']={
      init:function(){
        this.jsonInit(
          {
            "type": "str",
            "tooltip": "",
            "helpUrl": "",
            "message0": "str( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "a"
              },
              {
                "type": "input_dummy",
                "name": "b"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['float']={
      init:function(){
        this.jsonInit(
          {
            "type": "float",
            "tooltip": "",
            "helpUrl": "",
            "message0": "float( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "a"
              },
              {
                "type": "input_dummy",
                "name": "b"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['infnum']={
      init:function(){
        this.jsonInit(
          {
            "type": "infnum",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "a",
                "options": [
                  [
                    'inf',
                    "inf"
                  ],
                  [
                    'nan',
                    "nan"
                  ]
                ]
              },
              {
                "type": "input_value",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
    Blockly.Blocks['range']={
      init:function(){
        this.jsonInit(
          {
            "type": "range",
            "tooltip": "",
            "helpUrl": "",
            "message0": "range( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "a"
              },
              {
                "type": "input_dummy",
                "name": "b"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225,
            "inputsInline": true
          }
        );
      }
    };
    Blockly.Blocks['andornot']={
      init:function(){
        this.jsonInit(
         {
            "type": "range",
            "tooltip": "",
            "helpUrl": "",
            "message0": "range( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "a"
              },
              {
                "type": "input_dummy",
                "name": "b"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225,
            "inputsInline": true
          }
        );
      }
    };
    Blockly.Blocks['reversed']={
      init:function(){
        this.jsonInit(
          {
            "type": "reversed",
            "tooltip": "",
            "helpUrl": "",
            "message0": "reversed( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "a"
              },
              {
                "type": "input_dummy",
                "name": "b"
              }
            ],
            "colour": 225,
            "inputsInline": true
          }
        );
      }
    };
    Blockly.Blocks['break']={
      init:function(){
        this.jsonInit(
          {
            "type": "break",
            "tooltip": "",
            "helpUrl": "",
            "message0": "break %1",
            "args0": [
              {
                "type": "input_dummy",
                "name": "a"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225,
            "inputsInline": true
          }
        );
      }
    };
    Blockly.Blocks['pass']={
      init:function(){
        this.jsonInit(
          {
            "type": "pass",
            "tooltip": "",
            "helpUrl": "",
            "message0": "pass %1",
            "args0": [
              {
                "type": "input_dummy",
                "name": "a"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225,
            "inputsInline": true
          }
        );
      }
    };
    Blockly.Blocks['continue']={
      init:function(){
        this.jsonInit(
          {
            "type": "continue",
            "tooltip": "",
            "helpUrl": "",
            "message0": "continue %1",
            "args0": [
              {
                "type": "input_dummy",
                "name": "a"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225,
            "inputsInline": true
          }
        );
      }
    };

    pythonGenerator.forBlock['if'] = function(block,generator) {
        var value_if_main = generator.valueToCode(block, 'if_main', Order.ATOMIC);
        var dropdown_if_dropdown = block.getFieldValue('if_dropdown');
        var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
        var statements_if_statement = generator.statementToCode(block, 'if_statement');
        var operatorMap = {
            'equal': '==',
            'not_equal': '!=',
            'less_then': '>',
            'more_than': '<',
            'below': '>=',
            'avobe': '<='
        };
        var operator = operatorMap[dropdown_if_dropdown];
        var code = `if ${value_if_main} ${operator} ${value_name}:\n${statements_if_statement}`;
        return code;
      };
    pythonGenerator.forBlock['string'] = function(block, generator) {
      var text_string_text = block.getFieldValue('String_Text');
      // TODO: Assemble python into code variable.
      var code = `"${text_string_text}"`
      return [code,Order.NONE];
    };
    
    pythonGenerator.forBlock['print'] = function(block, generator) {
      var value_print = generator.valueToCode(block, 'Print', Order.ATOMIC);
      // TODO: Assemble python into code variable.
      var code = `print(${value_print})\n`;
      return code;
    };
    pythonGenerator.forBlock['input'] = function(block, generator) {
      var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
      // TODO: Assemble python into code variable.
      var code = `input()${value_name}`;
      return [code,Order.NONE];
    };
    pythonGenerator.forBlock['num'] = function(block, generator) {
      const number_name = block.getFieldValue('NAME');
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
    
      // TODO: Assemble python into the code variable.
      const code =`${number_name}`;
      // TODO: Change Order.NONE to the correct operator precedence strength
      return [code, Order.ATOMIC];
    }
    pythonGenerator.forBlock['bool'] = function(block, generator) {
      const dropdown_tf = block.getFieldValue('TF');
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_bool = generator.valueToCode(block, 'bool', Order.ATOMIC);
      const operatorMap = {
        'True': 'Ture',
        'False': 'False',
      };
      const operator = operatorMap[dropdown_tf];
      // TODO: Assemble python into the code variable.
      const code = `${operator}`;
      // TODO: Change Order.NONE to the correct operator precedence strength
      return [code, Order.NONE];
    }  
    pythonGenerator.forBlock['math'] = function(block,generator) {
      const dropdown_name = block.getFieldValue('NAME');
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_math = generator.valueToCode(block, 'math', Order.ATOMIC);
      const operatorMap = {
        'plus': '+',
        'minus': '-',
        'multi': '*',
        'division': '/',
        'Tdivision': '//',
        'surplus': '%',
        'exponentiation': '**'
    };
    const operator = operatorMap[dropdown_name];
      // TODO: Assemble python into the code variable.
      const code = `${operator}`;
      // TODO: Change Order.NONE to the correct operator precedence strength
      return [code, Order.ATOMIC];
    }
    pythonGenerator.forBlock['variable'] = function(block,generator) {
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_v = generator.valueToCode(block, 'v', Order.ATOMIC);
    
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
    
      // TODO: Assemble python into the code variable.
      const code = `${value_v} = ${value_name}`;
      return code;
    }
    pythonGenerator.forBlock['forvariavle'] = function(block,generator) {
      const text_name = block.getFieldValue('NAME');
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
    
      // TODO: Assemble python into the code variable.
      const code = `${text_name}`;
      // TODO: Change Order.NONE to the correct operator precedence strength
      return [code, Order.ATOMIC];
    }
    pythonGenerator.forBlock['array'] = function(block,generator) {
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_b = generator.valueToCode(block, 'b', Order.ATOMIC);
    
    
      // TODO: Assemble python into the code variable.
      const code = `${value_a} =[${value_b}]`;
      return code;
    }
    pythonGenerator.forBlock['dict'] = function(block,generator) {
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_b = generator.valueToCode(block, 'b', Order.ATOMIC);
    
    
      // TODO: Assemble python into the code variable.
      const code = `${value_a} ={${value_b}}`;
      return code;
    }
    pythonGenerator.forBlock['exit'] = function(block,generator) {
      var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
      // TODO: Assemble python into the code variable.
      const code = `${value_name}`;
      return code;
    }
    pythonGenerator.forBlock['int'] = function(block,generator) {
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    
  
      // TODO: Assemble python into the code variable.
      const code = `${value_a}`;
      return code;
    }
    pythonGenerator.forBlock['str'] = function(block,generator) {
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    
  
      // TODO: Assemble python into the code variable.
      const code = `${value_a}`;
      return code;
    }
    pythonGenerator.forBlock['float'] = function(block,generator) {
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    
  
      // TODO: Assemble python into the code variable.
      const code = `${value_a}`;
      return code;
    }
    pythonGenerator.forBlock['infnum'] = function(block,generator) { 
      const dropdown_a = block.getFieldValue('a');
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
      const operatorMap = {
        'inf': 'inf',
        'nan': 'nan',
      };
      const operator = operatorMap[dropdown_a];
      // TODO: Assemble python into the code variable.
      const code = `"${operator}"`;
      // TODO: Change Order.NONE to the correct operator precedence strength
      return [code, Order.NONE];
    }
    pythonGenerator.forBlock['andornot'] = function(block,generator) {
      const dropdown_a = block.getFieldValue('a');
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
      const operatorMap = {
        'inf': 'inf',
        'nan': 'nan',
      };
      const operator = operatorMap[dropdown_a];
      // TODO: Assemble python into the code variable.
      const code = `${operator}`;
      // TODO: Change Order.NONE to the correct operator precedence strength
      return [code, Order.NONE];
    }
    pythonGenerator.forBlock['range'] = function(block,generator) {
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    
    
      // TODO: Assemble python into the code variable.
      const code = `${value_a}`;
      return code;
    }
    pythonGenerator.forBlock['reversed'] = function(block,generator) {
      // TODO: change Order.ATOMIC to the correct operator precedence strength
      const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    
    
      // TODO: Assemble python into the code variable.
      const code = `${value_a}`;
      return code;
    }
    pythonGenerator.forBlock['break'] = function() {
      // TODO: Assemble python into the code variable.
      const code = `break`;
      return code;
    }
    pythonGenerator.forBlock['pass'] = function() {

      // TODO: Assemble python into the code variable.
      const code = `pass`;
      return code;
    }
    pythonGenerator.forBlock['continue'] = function() {

      // TODO: Assemble python into the code variable.
      const code = `continue`;
      return code;
    }
  }



export default customblocks;