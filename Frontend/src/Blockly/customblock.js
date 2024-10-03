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
        "type": "input",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Input() %1",
        "args0": [
          {
            "type": "input_dummy",
            "name": "input"
          }
        ],
        "output": null,
        "colour": 225
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
        "colour": 225,
        "inputsInline": true,
        "output": null,
      }
    );
  }
};
Blockly.Blocks['andornot']={
  init:function(){
    this.jsonInit(
      {
        "type": "andornot",
        "tooltip": "",
        "helpUrl": "",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "a",
            "options": [
              [
                'and',
                "and"
              ],
              [
                'or',
                "or"
              ],
              [
                'not',
                "not"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "a"
          }
        ],
        "output": null,
        "colour": 225
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
        "inputsInline": true,
        "output": null,
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
Blockly.Blocks['for']={
  init:function(){
    this.jsonInit(
      {
        "type": "for",
        "tooltip": "",
        "helpUrl": "",
        "message0": "%1 %2 %3 %4 %5",
        "args0": [
          {
            "type": "field_label_serializable",
            "text": "for",
            "name": "a"
          },
          {
            "type": "input_value",
            "name": "A"
          },
          {
            "type": "field_label_serializable",
            "text": "in",
            "name": "b"
          },
          {
            "type": "input_value",
            "name": "B"
          },
          {
            "type": "input_statement",
            "name": "C"
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
Blockly.Blocks['while']={
  init:function(){
    this.jsonInit(
      {
        "type": "while",
        "tooltip": "",
        "helpUrl": "",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "field_label_serializable",
            "text": "while",
            "name": "a"
          },
          {
            "type": "input_value",
            "name": "A"
          },
          {
            "type": "input_statement",
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

  
  pythonGenerator.forBlock['print'] = function(block, generator) {
    var value_print = generator.valueToCode(block, 'Print', Order.ATOMIC);
    var code = `print(${value_print})\n`;
    return code;
  };
  pythonGenerator.forBlock['input'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'input', Order.ATOMIC);
    var code = `input()${value_name}`;
    return [code, Order.ATOMIC];
  };
  pythonGenerator.forBlock['num'] = function(block, generator) {
    const number_name = block.getFieldValue('NAME');
    const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
    const code =`${number_name}${value_name}`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['bool'] = function(block, generator) {
    const dropdown_tf = block.getFieldValue('TF');
    const value_bool = generator.valueToCode(block, 'bool', Order.ATOMIC);
    const operatorMap = {
      'True': 'Ture',
      'False': 'False',
    };
    const operator = operatorMap[dropdown_tf];
    const code = `${operator}${value_bool}`;
    return [code, Order.ATOMIC];
  }  
  pythonGenerator.forBlock['math'] = function(block,generator) {
    const dropdown_name = block.getFieldValue('NAME');
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
    const code = `${operator}${value_math}`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['variable'] = function(block,generator) {
    const value_v = generator.valueToCode(block, 'v', Order.ATOMIC);
    const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
    const code = `${value_v} = ${value_name}\n`;
    return code;
  }
  pythonGenerator.forBlock['string'] = function(block, generator) {
    const text_string_text = block.getFieldValue('String_Text');
    const code = `"${text_string_text}"`
    return [code,Order.ATOMIC];
  };
  pythonGenerator.forBlock['forvariavle'] = function(block,generator) {
    const text_name = block.getFieldValue('NAME');
    const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
    const code = `${text_name}${value_name}`;

    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['array'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    const value_b = generator.valueToCode(block, 'b', Order.ATOMIC);
    const code = `${value_a} =[${value_b}]\n`;
    return code;
  }
  pythonGenerator.forBlock['dict'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    const value_b = generator.valueToCode(block, 'b', Order.ATOMIC);
    const code = `${value_a} ={${value_b}}\n`;
    return code;
  }
  pythonGenerator.forBlock['exit'] = function(block,generator) {
    const code = `exit()\n`;
    return code;
  }
  pythonGenerator.forBlock['int'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    const code = `int(${value_a})\n`;
    return code;
  }
  pythonGenerator.forBlock['str'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    const code = `str(${value_a})\n`;
    return code;
  }
  pythonGenerator.forBlock['float'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    const code = `float(${value_a})\n`;
    return code;
  }
  pythonGenerator.forBlock['infnum'] = function(block,generator) { 
    const dropdown_a = block.getFieldValue('a');
    const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
    const operatorMap = {
      'inf': 'inf',
      'nan': 'nan',
    };
    const operator = operatorMap[dropdown_a];
    const code = `"${operator}${value_name}"`;
    return [code, Order.NONE];
  }
  pythonGenerator.forBlock['andornot'] = function(block,generator) {
    const dropdown_a = block.getFieldValue('a');
    const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    const operatorMap = {
      'and': 'and',
      'or': 'or',
      'not': 'not',
    };
    const operator = operatorMap[dropdown_a];
    const code = `${operator}${value_a}`;
    return [code, Order.NONE];
  }
  pythonGenerator.forBlock['range'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    const code = `range(${value_a})\n`;
    return code;
  }
  pythonGenerator.forBlock['reversed'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
    const code = `reversed(${value_a})`;
    return code;
  }
  pythonGenerator.forBlock['break'] = function() {
    const code = `break\n`;
    return code;
  }
  pythonGenerator.forBlock['pass'] = function() {
    const code = `pass`;
    return code;
  }
  pythonGenerator.forBlock['continue'] = function() {
    const code = `continue`;
    return code;
  }
  pythonGenerator.forBlock['for'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const value_b = generator.valueToCode(block, 'B', Order.ATOMIC);
  
    const statement_c = generator.statementToCode(block, 'C');
    const code = `for ${value_a}in ${value_b}:\n${statement_c}`;
    return code;
  }
  pythonGenerator.forBlock['while'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
    const statement_name = generator.statementToCode(block, 'NAME');
    const code = `while ${value_a}:\n${statement_name}`;
    return code;
  }
  Blockly.Blocks['ifjp']={
    init:function(){
        this.jsonInit({
            "type": "ifjp",
            "message0": "もし %1 %2 %3 ならば以下を実行する %4 %5",
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
                "type": "input_dummy",
                "name": "c"
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

  Blockly.Blocks['printjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "printjp",
            "message0": " %1 を表示する",
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
  Blockly.Blocks['inputjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "inputjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "入力を取得する %1",
          "args0": [
            {
              "type": "input_dummy",
              "name": "input"
            }
          ],
          "output": null,
          "colour": 225
        }                   
      );
    }
  };
  Blockly.Blocks['numjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "numjp",
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
  Blockly.Blocks['booljp']={
    init:function(){
      this.jsonInit(
        {
          "type": "booljp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "%1 %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "TF",
              "options": [
                [
                  "真",
                  "True"
                ],
                [
                  "偽",
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
  Blockly.Blocks['mathjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "mathjp",
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
  Blockly.Blocks['variablejp']={
    init:function(){
      this.jsonInit(
        {
          "type": "variablejp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "%1 ← %2",
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
  Blockly.Blocks['stringjp']={
    init:function(){
        this.jsonInit({
          "type": "stringjp",
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
  Blockly.Blocks['forvariavlejp']={
    init:function(){
      this.jsonInit(
        {
          "type": "forvariavlejp",
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
  Blockly.Blocks['arrayjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "arrayjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "%1 ←[ %2 ] %3",
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
  Blockly.Blocks['dictjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "dictjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "%1 ←{ %2 } %3",
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
  Blockly.Blocks['exitjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "exitjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "プログラムを終了する %1",
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
  Blockly.Blocks['intjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "intjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "整数型に変換する( %1 ) %2",
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
  Blockly.Blocks['strjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "strjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "文字列型に変換する( %1 ) %2",
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
  Blockly.Blocks['floatjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "floatjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "浮動小数点型に変換する( %1 ) %2",
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
  Blockly.Blocks['infnumjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "infnumjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "%1 %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "a",
              "options": [
                [
                  '無限',
                  "inf"
                ],
                [
                  '数ではない',
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
  Blockly.Blocks['rangejp']={
    init:function(){
      this.jsonInit(
        {
          "type": "rangejp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "0から( %1 ) になるまで1ずつ増す %2",
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
          "inputsInline": true,
          "output": null,
        }
      );
    }
  };
  Blockly.Blocks['andornotjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "andornotjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "%1 %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "a",
              "options": [
                [
                  'かつ',
                  "and"
                ],
                [
                  'または',
                  "or"
                ],
                [
                  'でない',
                  "not"
                ]
              ]
            },
            {
              "type": "input_value",
              "name": "a"
            }
          ],
          "output": null,
          "colour": 225
        }
      );
    }
  };
  Blockly.Blocks['reversedjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "reversedjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "後ろから読み取る( %1 ) %2",
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
          "inputsInline": true,
          "output": null,
        }
      );
    }
  };
  Blockly.Blocks['breakjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "breakjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "ループを終了する %1",
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
  Blockly.Blocks['passjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "passjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "何もしない %1",
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
  Blockly.Blocks['continuejp']={
    init:function(){
      this.jsonInit(
        {
          "type": "continuejp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "ループの初めに戻る %1",
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
  Blockly.Blocks['forjp']={
    init:function(){
      this.jsonInit(
        {
          "type": "forjp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "%1 %2 %3 %4 しながら %5 %6",
          "args0": [
            {
              "type": "field_label_serializable",
              "text": "",
              "name": "a"
            },
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "field_label_serializable",
              "text": "を",
              "name": "b"
            },
            {
              "type": "input_value",
              "name": "B"
            },
            {
              "type": "input_dummy",
              "name": "d"
            },
            {
              "type": "input_statement",
              "name": "C"
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
  Blockly.Blocks['whilejp']={
    init:function(){
      this.jsonInit(
        {
          "type": "whilejp",
          "tooltip": "",
          "helpUrl": "",
          "message0": "%1 の間以下を繰り返す %2 %3",
          "args0": [
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "input_dummy",
              "name": "c"
            },
            {
              "type": "input_statement",
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
  pythonGenerator.forBlock['ifjp'] = function(block,generator) {
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


  pythonGenerator.forBlock['printjp'] = function(block, generator) {
  var value_print = generator.valueToCode(block, 'Print', Order.ATOMIC);
  var code = `print(${value_print})\n`;
  return code;
  };
  pythonGenerator.forBlock['inputjp'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'input', Order.ATOMIC);
  var code = `input()${value_name}`;
  return [code, Order.ATOMIC];
  };
  pythonGenerator.forBlock['numjp'] = function(block, generator) {
  const number_name = block.getFieldValue('NAME');
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code =`${number_name}${value_name}`;
  return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['booljp'] = function(block, generator) {
  const dropdown_tf = block.getFieldValue('TF');
  const value_bool = generator.valueToCode(block, 'bool', Order.ATOMIC);
  const operatorMap = {
    'True': 'Ture',
    'False': 'False',
  };
  const operator = operatorMap[dropdown_tf];
  const code = `${operator}${value_bool}`;
  return [code, Order.ATOMIC];
  }  
  pythonGenerator.forBlock['mathjp'] = function(block,generator) {
  const dropdown_name = block.getFieldValue('NAME');
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
  const code = `${operator}${value_math}`;
  return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['variablejp'] = function(block,generator) {
  const value_v = generator.valueToCode(block, 'v', Order.ATOMIC);
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code = `${value_v} = ${value_name}\n`;
  return code;
  }
  pythonGenerator.forBlock['stringjp'] = function(block, generator) {
  const text_string_text = block.getFieldValue('String_Text');
  const code = `"${text_string_text}"`
  return [code,Order.ATOMIC];
  };
  pythonGenerator.forBlock['forvariavlejp'] = function(block,generator) {
  const text_name = block.getFieldValue('NAME');
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code = `${text_name}${value_name}`;

  return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['arrayjp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
  const value_b = generator.valueToCode(block, 'b', Order.ATOMIC);
  const code = `${value_a} =[${value_b}]\n`;
  return code;
  }
  pythonGenerator.forBlock['dictjp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
  const value_b = generator.valueToCode(block, 'b', Order.ATOMIC);
  const code = `${value_a} ={${value_b}}\n`;
  return code;
  }
  pythonGenerator.forBlock['exitjp'] = function(block,generator) {
  const code = `exit()\n`;
  return code;
  }
  pythonGenerator.forBlock['intjp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
  const code = `int(${value_a})\n`;
  return code;
  }
  pythonGenerator.forBlock['strjp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
  const code = `str(${value_a})\n`;
  return code;
  }
  pythonGenerator.forBlock['floatjp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
  const code = `float(${value_a})\n`;
  return code;
  }
  pythonGenerator.forBlock['infnumjp'] = function(block,generator) { 
  const dropdown_a = block.getFieldValue('a');
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const operatorMap = {
    'inf': 'inf',
    'nan': 'nan',
  };
  const operator = operatorMap[dropdown_a];
  const code = `"${operator}${value_name}"`;
  return [code, Order.NONE];
  }
  pythonGenerator.forBlock['andornotjp'] = function(block,generator) {
  const dropdown_a = block.getFieldValue('a');
  const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
  const operatorMap = {
    'and': 'and',
    'or': 'or',
    'not': 'not',
  };
  const operator = operatorMap[dropdown_a];
  const code = `${operator}${value_a}`;
  return [code, Order.NONE];
  }
  pythonGenerator.forBlock['rangejp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
  const code = `range(${value_a})\n`;
  return code;
  }
  pythonGenerator.forBlock['reversedjp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'a', Order.ATOMIC);
  const code = `reversed(${value_a})`;
  return code;
  }
  pythonGenerator.forBlock['breakjp'] = function() {
  const code = `break\n`;
  return code;
  }
  pythonGenerator.forBlock['passjp'] = function() {
  const code = `pass`;
  return code;
  }
  pythonGenerator.forBlock['continuejp'] = function() {
  const code = `continue`;
  return code;
  }
  pythonGenerator.forBlock['forjp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  const value_b = generator.valueToCode(block, 'B', Order.ATOMIC);

  const statement_c = generator.statementToCode(block, 'C');
  const code = `for ${value_a}in ${value_b}:\n${statement_c}`;
  return code;
  }
  pythonGenerator.forBlock['whilejp'] = function(block,generator) {
  const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);

  const statement_name = generator.statementToCode(block, 'NAME');
  const code = `while ${value_a}:\n${statement_name}`;
  return code;
  }
}


export default customblocks;