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
Blockly.Blocks['elif']={
  init:function(){
      this.jsonInit(
        {
          "type": "elif",
          "tooltip": "",
          "helpUrl": "",
          "message0": "elif %1 %2 %3 %4 %5",
          "args0": [
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "field_dropdown",
              "name": "drop",
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
              "name": "B"
            },
            {
              "type": "input_dummy",
              "name": "C"
            },
            {
              "type": "input_statement",
              "name": "D"
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": 330,
          "inputsInline": true
        }
        );
    }
};
Blockly.Blocks['else']={
  init:function(){
      this.jsonInit(
        {
          "type": "else",
          "tooltip": "",
          "helpUrl": "",
          "message0": "else %1 %2",
          "args0": [
            {
              "type": "input_dummy",
              "name": "A"
            },
            {
              "type": "input_statement",
              "name": "B"
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": 330
        }
                            
        );
    }
};
Blockly.Blocks['sum']={
  init:function(){
      this.jsonInit(
        {
          "type": "sum",
          "tooltip": "",
          "helpUrl": "",
          "message0": "sum( %1 ) %2",
          "args0": [
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "input_dummy",
              "name": "B"
            }
          ],
          "output": null,
          "colour": 225
        }      
      );
    }
};
Blockly.Blocks['max']={
  init:function(){
      this.jsonInit(
        {
          "type": "max",
          "tooltip": "",
          "helpUrl": "",
          "message0": "max( %1 ) %2",
          "args0": [
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "input_dummy",
              "name": "B"
            }
          ],
          "output": null,
          "colour": 225
        } 
      );
    }
};
Blockly.Blocks['min']={
  init:function(){
      this.jsonInit(
        {
          "type": "min",
          "tooltip": "",
          "helpUrl": "",
          "message0": "min( %1 ) %2",
          "args0": [
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "input_dummy",
              "name": "B"
            }
          ],
          "output": null,
          "colour": 225
        }   
      );
    }
};
Blockly.Blocks['sorted']={
  init:function(){
      this.jsonInit(
        {
          "type": "sorted",
          "tooltip": "",
          "helpUrl": "",
          "message0": "sorted( %1 ) %2",
          "args0": [
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "input_dummy",
              "name": "B"
            }
          ],
          "output": null,
          "colour": 225
        }   
      );
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
        "tooltip": "",
        "helpUrl": "",
        "message0": "\" %1 \" %2",
        "args0": [
          {
            "type": "field_input",
            "name": "String_Text",
            "text": " "
          },
          {
            "type": "input_value",
            "name": "A"
          }
        ],
        "output": null,
        "colour": 225
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
        "output": null,
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
        "message0": "%1 %2 %3 %4 %5",
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
            "type": "field_dropdown",
            "name": "drop",
            "options": [
              [
                "==",
                "OPTIONNAME"
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
              [
                "True",
                "True"
              ]
            ]
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
  Blockly.Blocks['sumjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "sumjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "合計( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "colour": 225
          }      
        );
      }
  };
  Blockly.Blocks['maxjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "maxjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "最大( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "colour": 225
          } 
        );
      }
  };
  Blockly.Blocks['minjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "minjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "最小( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "colour": 225
          }   
        );
      }
  };
Blockly.Blocks['def']={
  init:function(){
      this.jsonInit(
        {
          "type": "def",
          "tooltip": "",
          "helpUrl": "",
          "message0": "def %1 ( %2 ): %3 %4",
          "args0": [
            {
              "type": "field_input",
              "name": "NAME",
              "text": ""
            },
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "input_dummy",
              "name": "NAME"
            },
            {
              "type": "input_statement",
              "name": "B"
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": 225
        }
                                     
      );
    }
  };
  Blockly.Blocks['return']={
    init:function(){
        this.jsonInit(
          {
            "type": "return",
            "tooltip": "",
            "helpUrl": "",
            "message0": "return %1 %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225
          }
                              
        );
      }
    };
  Blockly.Blocks['usedef']={
    init:function(){
        this.jsonInit(
          {
            "type": "usedef",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 ( %2 ) %3",
            "args0": [
              {
                "type": "field_input",
                "name": "name",
                "text": ""
              },
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
                                                
        );
      }
    };
  Blockly.Blocks['usearray']={
    init:function(){
        this.jsonInit(
          {
            "type": "usearray",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 [ %2 ] %3",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_value",
                "name": "B"
              },
              {
                "type": "input_value",
                "name": "C"
              }
            ],
            "output": null,
            "colour": 225,
            "inputsInline": true
          }                                  
        );
      }
    };
  Blockly.Blocks['append']={
    init:function(){
        this.jsonInit(
          {
            "type": "append",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".append( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
                              
        );
      }
    };
  Blockly.Blocks['remove']={
    init:function(){
        this.jsonInit(
          {
            "type": "remove",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".remove( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['pop']={
    init:function(){
        this.jsonInit(
          {
            "type": "pop",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".pop( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['clear']={
    init:function(){
        this.jsonInit(
          {
            "type": "clear",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".clear( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
      Blockly.Blocks['append']={
    init:function(){
        this.jsonInit(
          {
            "type": "append",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".append( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
                              
        );
      }
    };
  Blockly.Blocks['remove']={
    init:function(){
        this.jsonInit(
          {
            "type": "remove",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".remove( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['pop']={
    init:function(){
        this.jsonInit(
          {
            "type": "pop",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".pop( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['clear']={
    init:function(){
        this.jsonInit(
          {
            "type": "clear",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".clear( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
      Blockly.Blocks['append']={
    init:function(){
        this.jsonInit(
          {
            "type": "append",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".append( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
                              
        );
      }
    };
  Blockly.Blocks['remove']={
    init:function(){
        this.jsonInit(
          {
            "type": "remove",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".remove( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['pop']={
    init:function(){
        this.jsonInit(
          {
            "type": "pop",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".pop( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['clear']={
    init:function(){
        this.jsonInit(
          {
            "type": "clear",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".clear( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };  Blockly.Blocks['append']={
      init:function(){
          this.jsonInit(
            {
              "type": "append",
              "tooltip": "",
              "helpUrl": "",
              "message0": ".append( %1 ) %2",
              "args0": [
                {
                  "type": "input_value",
                  "name": "A"
                },
                {
                  "type": "input_dummy",
                  "name": "B"
                }
              ],
              "output": null,
              "colour": 225
            }
                                
          );
        }
      };
    Blockly.Blocks['remove']={
      init:function(){
          this.jsonInit(
            {
              "type": "remove",
              "tooltip": "",
              "helpUrl": "",
              "message0": ".remove( %1 ) %2",
              "args0": [
                {
                  "type": "input_value",
                  "name": "A"
                },
                {
                  "type": "input_dummy",
                  "name": "B"
                }
              ],
              "output": null,
              "colour": 225
            }
          );
        }
      };
    Blockly.Blocks['pop']={
      init:function(){
          this.jsonInit(
            {
              "type": "pop",
              "tooltip": "",
              "helpUrl": "",
              "message0": ".pop( %1 ) %2",
              "args0": [
                {
                  "type": "input_value",
                  "name": "A"
                },
                {
                  "type": "input_dummy",
                  "name": "B"
                }
              ],
              "output": null,
              "colour": 225
            }
          );
        }
      };
    Blockly.Blocks['clear']={
      init:function(){
          this.jsonInit(
            {
              "type": "clear",
              "tooltip": "",
              "helpUrl": "",
              "message0": ".clear( %1 ) %2",
              "args0": [
                {
                  "type": "input_value",
                  "name": "A"
                },
                {
                  "type": "input_dummy",
                  "name": "B"
                }
              ],
              "output": null,
              "colour": 225
            }
          );
        }
      };  Blockly.Blocks['append']={
        init:function(){
            this.jsonInit(
              {
                "type": "append",
                "tooltip": "",
                "helpUrl": "",
                "message0": ".append( %1 ) %2",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "A"
                  },
                  {
                    "type": "input_dummy",
                    "name": "B"
                  }
                ],
                "output": null,
                "colour": 225
              }
                                  
            );
          }
        };
      Blockly.Blocks['remove']={
        init:function(){
            this.jsonInit(
              {
                "type": "remove",
                "tooltip": "",
                "helpUrl": "",
                "message0": ".remove( %1 ) %2",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "A"
                  },
                  {
                    "type": "input_dummy",
                    "name": "B"
                  }
                ],
                "output": null,
                "colour": 225
              }
            );
          }
        };
      Blockly.Blocks['pop']={
        init:function(){
            this.jsonInit(
              {
                "type": "pop",
                "tooltip": "",
                "helpUrl": "",
                "message0": ".pop( %1 ) %2",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "A"
                  },
                  {
                    "type": "input_dummy",
                    "name": "B"
                  }
                ],
                "output": null,
                "colour": 225
              }
            );
          }
        };
      Blockly.Blocks['clear']={
        init:function(){
            this.jsonInit(
              {
                "type": "clear",
                "tooltip": "",
                "helpUrl": "",
                "message0": ".clear( %1 ) %2",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "A"
                  },
                  {
                    "type": "input_dummy",
                    "name": "B"
                  }
                ],
                "output": null,
                "colour": 225
              }
            );
          }
        };  Blockly.Blocks['append']={
          init:function(){
              this.jsonInit(
                {
                  "type": "append",
                  "tooltip": "",
                  "helpUrl": "",
                  "message0": ".append( %1 ) %2",
                  "args0": [
                    {
                      "type": "input_value",
                      "name": "A"
                    },
                    {
                      "type": "input_dummy",
                      "name": "B"
                    }
                  ],
                  "output": null,
                  "colour": 225
                }
                                    
              );
            }
          };
        Blockly.Blocks['remove']={
          init:function(){
              this.jsonInit(
                {
                  "type": "remove",
                  "tooltip": "",
                  "helpUrl": "",
                  "message0": ".remove( %1 ) %2",
                  "args0": [
                    {
                      "type": "input_value",
                      "name": "A"
                    },
                    {
                      "type": "input_dummy",
                      "name": "B"
                    }
                  ],
                  "output": null,
                  "colour": 225
                }
              );
            }
          };
        Blockly.Blocks['pop']={
          init:function(){
              this.jsonInit(
                {
                  "type": "pop",
                  "tooltip": "",
                  "helpUrl": "",
                  "message0": ".pop( %1 ) %2",
                  "args0": [
                    {
                      "type": "input_value",
                      "name": "A"
                    },
                    {
                      "type": "input_dummy",
                      "name": "B"
                    }
                  ],
                  "output": null,
                  "colour": 225
                }
              );
            }
          };
        Blockly.Blocks['clear']={
          init:function(){
              this.jsonInit(
                {
                  "type": "clear",
                  "tooltip": "",
                  "helpUrl": "",
                  "message0": ".clear( %1 ) %2",
                  "args0": [
                    {
                      "type": "input_value",
                      "name": "A"
                    },
                    {
                      "type": "input_dummy",
                      "name": "B"
                    }
                  ],
                  "output": null,
                  "colour": 225
                }
              );
            }
          };  Blockly.Blocks['append']={
            init:function(){
                this.jsonInit(
                  {
                    "type": "append",
                    "tooltip": "",
                    "helpUrl": "",
                    "message0": ".append( %1 ) %2",
                    "args0": [
                      {
                        "type": "input_value",
                        "name": "A"
                      },
                      {
                        "type": "input_dummy",
                        "name": "B"
                      }
                    ],
                    "output": null,
                    "colour": 225
                  }
                                      
                );
              }
            };
          Blockly.Blocks['remove']={
            init:function(){
                this.jsonInit(
                  {
                    "type": "remove",
                    "tooltip": "",
                    "helpUrl": "",
                    "message0": ".remove( %1 ) %2",
                    "args0": [
                      {
                        "type": "input_value",
                        "name": "A"
                      },
                      {
                        "type": "input_dummy",
                        "name": "B"
                      }
                    ],
                    "output": null,
                    "colour": 225
                  }
                );
              }
            };
          Blockly.Blocks['pop']={
            init:function(){
                this.jsonInit(
                  {
                    "type": "pop",
                    "tooltip": "",
                    "helpUrl": "",
                    "message0": ".pop( %1 ) %2",
                    "args0": [
                      {
                        "type": "input_value",
                        "name": "A"
                      },
                      {
                        "type": "input_dummy",
                        "name": "B"
                      }
                    ],
                    "output": null,
                    "colour": 225
                  }
                );
              }
            };
          Blockly.Blocks['clear']={
            init:function(){
                this.jsonInit(
                  {
                    "type": "clear",
                    "tooltip": "",
                    "helpUrl": "",
                    "message0": ".clear( %1 ) %2",
                    "args0": [
                      {
                        "type": "input_value",
                        "name": "A"
                      },
                      {
                        "type": "input_dummy",
                        "name": "B"
                      }
                    ],
                    "output": null,
                    "colour": 225
                  }
                );
              }
            };  Blockly.Blocks['append']={
    init:function(){
        this.jsonInit(
          {
            "type": "append",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".append( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
                              
        );
      }
    };
  Blockly.Blocks['remove']={
    init:function(){
        this.jsonInit(
          {
            "type": "remove",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".remove( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['pop']={
    init:function(){
        this.jsonInit(
          {
            "type": "pop",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".pop( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['clear']={
    init:function(){
        this.jsonInit(
          {
            "type": "clear",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".clear( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['almighty']={
    init:function(){
        this.jsonInit(
          {
            "type": "almighty",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1",
            "args0": [
              {
                "type": "input_value",
                "name": "NAME"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225
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

  pythonGenerator.forBlock['elif'] = function(block, generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
    const dropdown_drop = block.getFieldValue('drop');

    const value_b = generator.valueToCode(block, 'B', Order.ATOMIC);
  
    const statement_d = generator.statementToCode(block, 'D');
    const operatorMap={
      'equal': '==',
      'not_equal': '!=',
      'less_then': '>',
      'more_than': '<',
      'below': '>=',
      'above': '<='
    }
    const operator = operatorMap[dropdown_drop];
    const code =`elif ${value_a}${operator} ${value_b}:\n ${statement_d}`;
    return code;
  }
  pythonGenerator.forBlock['else'] = function(block, generator) {
    const statement_b = generator.statementToCode(block, 'B');
  
    // TODO: Assemble python into the code variable.
    const code = `else:\n${statement_b}`;
    return code;
  }
  pythonGenerator.forBlock['sum'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `sum(${value_a})`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['max'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `max(${value_a})`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['min'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `min(${value_a})`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['sorted'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `sorted(${value_a})`;
    return [code, Order.ATOMIC];
  }
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
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `"${text_string_text}"${value_a}`;
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
    const code = `int(${value_a})`;
    return [code, Order.ATOMIC];
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
    const code = `range(${value_a})`;
    return [code, Order.ATOMIC];
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
    const code = `for ${value_a} in ${value_b}:\n${statement_c}`;
    return code;
  }
  pythonGenerator.forBlock['while'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
    const dropdown_drop = block.getFieldValue('drop');
    const value_b = generator.valueToCode(block, 'B', Order.ATOMIC);
    const statement_c = generator.statementToCode(block, 'C');
    const operatorMap={
      'equal': '==',
      'not_equal': '!=',
      'less_then': '>',
      'more_than': '<',
      'below': '>=',
      'above': '<=',
      'True':'True'
    }
    const operator = operatorMap[dropdown_drop];
    // TODO: Assemble python into the code variable.
    const code = `while ${value_a} ${operator} ${value_b}:\n${statement_c}`;
    return code;
  }
  pythonGenerator.forBlock['def'] = function(block,generator) {
    const text_name = block.getFieldValue('NAME');
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const statement_b = generator.statementToCode(block, 'B');
  
    // TODO: Assemble python into the code variable.
    const code = `def ${text_name} (${value_a}):\n${statement_b}`;
    return code;
  }
  pythonGenerator.forBlock['return'] = function(block,generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `return ${value_a}\n`;
    return [code,Order.ATOMIC];
  }
  pythonGenerator.forBlock['usedef'] = function(block,generator) {
    const text_name = block.getFieldValue('name');
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `${text_name}(${value_a})`;
    return code;
  }
  pythonGenerator.forBlock['usearray'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const value_b = generator.valueToCode(block, 'B', Order.ATOMIC);
    const value_c = generator.valueToCode(block, 'C', Order.ATOMIC);
    const code = `${value_a}[${value_b}]${value_c}`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['append'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `.append(${value_a})\n`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['remove'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `.remove(${value_a})\n`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['pop'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `.pop(${value_a})\n`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['claer'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `.clear(${value_a})\n`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['almighty'] = function(block,generator) {
    const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
    const code = `${value_name}`;
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
  Blockly.Blocks['elifjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "elifjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "ではなく、もし %1 %2 %3 ならば以下を実行する %4 %5",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "field_dropdown",
                "name": "drop",
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
                "name": "B"
              },
              {
                "type": "input_dummy",
                "name": "C"
              },
              {
                "type": "input_statement",
                "name": "D"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 330,
            "inputsInline": true
          }
          );
      }
  };
  Blockly.Blocks['elsejp']={
    init:function(){
        this.jsonInit(
          {
            "type": "elsejp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "それ以外なら %1 %2",
            "args0": [
              {
                "type": "input_dummy",
                "name": "A"
              },
              {
                "type": "input_statement",
                "name": "B"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 330
          }
                              
          );
      }
  };
  Blockly.Blocks['sumjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "sumjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "合計( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }      
        );
      }
  };
  Blockly.Blocks['maxjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "maxjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "最大( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          } 
        );
      }
  };
  Blockly.Blocks['minjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "minjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "最小( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }   
        );
      }
  };
  Blockly.Blocks['sortedjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "sortedjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "並べ替え( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }   
        );
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
        this.jsonInit(
          {
            "type": "stringjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "\" %1 \" %2",
            "args0": [
              {
                "type": "field_input",
                "name": "String_Text",
                "text": " "
              },
              {
                "type": "input_value",
                "name": "A"
              }
            ],
            "output": null,
            "colour": 225
          }        
      );
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
          "type": "int",
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
          "output": null,
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
          "message0": "%1 %2 %3 %4 %5 %6",
          "args0": [
            {
              "type": "input_value",
              "name": "A"
            },
            {
              "type": "field_dropdown",
              "name": "drop",
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
                ],
                [
                  "真",
                  "True"
                ]
              ]
            },
            {
              "type": "input_value",
              "name": "B"
            },
            {
              "type": "field_label_serializable",
              "text": "の間以下を繰り返す",
              "name": "a"
            },
            {
              "type": "input_dummy",
              "name": "NAME"
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
  Blockly.Blocks['defjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "def",
            "tooltip": "",
            "helpUrl": "",
            "message0": "自作関数 %1 ( %2 ): %3 %4",
            "args0": [
              {
                "type": "field_input",
                "name": "NAME",
                "text": ""
              },
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "NAME"
              },
              {
                "type": "input_statement",
                "name": "B"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225
          }
                              
        );
      }
    };
  Blockly.Blocks['returnjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "return",
            "tooltip": "",
            "helpUrl": "",
            "message0": "出力 %1 %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 225
          }
                              
        );
      }
    };
  Blockly.Blocks['usedefjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "usedefjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 ( %2 ) %3",
            "args0": [
              {
                "type": "field_input",
                "name": "name",
                "text": ""
              },
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
                                                
        );
      }
    };
  Blockly.Blocks['usearrayjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "usearrayjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 [ %2 ] %3",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_value",
                "name": "B"
              },
              {
                "type": "input_value",
                "name": "C"
              }
            ],
            "output": null,
            "colour": 225,
            "inputsInline": true
          }                                  
        );
      }
    };
  Blockly.Blocks['appendjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "appendjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".追加( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
                              
        );
      }
    };
  Blockly.Blocks['removejp']={
    init:function(){
        this.jsonInit(
          {
            "type": "removejp",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".削除( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['popjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "popjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".排出( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
          }
        );
      }
    };
  Blockly.Blocks['clearjp']={
    init:function(){
        this.jsonInit(
          {
            "type": "clearjp",
            "tooltip": "",
            "helpUrl": "",
            "message0": ".消去( %1 ) %2",
            "args0": [
              {
                "type": "input_value",
                "name": "A"
              },
              {
                "type": "input_dummy",
                "name": "B"
              }
            ],
            "output": null,
            "colour": 225
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
  pythonGenerator.forBlock['elifjp'] = function(block, generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
    const dropdown_drop = block.getFieldValue('drop');

    const value_b = generator.valueToCode(block, 'B', Order.ATOMIC);
  
    const statement_d = generator.statementToCode(block, 'D');
    const operatorMap={
      'equal': '==',
      'not_equal': '!=',
      'less_then': '>',
      'more_than': '<',
      'below': '>=',
      'above': '<='
    }
    const operator = operatorMap[dropdown_drop];
    const code =`elif ${value_a}${operator} ${value_b}:\n ${statement_d}`;
    return code;
  }
  pythonGenerator.forBlock['elsejp'] = function(block, generator) {
    const statement_b = generator.statementToCode(block, 'B');
  
    // TODO: Assemble python into the code variable.
    const code = `それ以外なら:\n${statement_b}`;
    return code;
  }
  pythonGenerator.forBlock['sumjp'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `sum(${value_a})`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['maxjp'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `max(${value_a})`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['minjp'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `min(${value_a})`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['sorted'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `sorted(${value_a})`;
    return [code, Order.ATOMIC];
  }
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
  const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  const code = `"${text_string_text}"${value_a}`;
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
    const code = `int(${value_a})`;
    return [code, Order.ATOMIC];
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
  const code = `range(${value_a})`;
  return [code, Order.ATOMIC];
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
  const code = `for ${value_a} in ${value_b}:\n${statement_c}`;
  return code;
  }
  pythonGenerator.forBlock['whilejp'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const dropdown_drop = block.getFieldValue('drop');
    const value_b = generator.valueToCode(block, 'B', Order.ATOMIC);
    const statement_c = generator.statementToCode(block, 'C');
    const operatorMap={
      'equal': '==',
      'not_equal': '!=',
      'less_then': '>',
      'more_than': '<',
      'below': '>=',
      'above': '<=',
      'True':'True',
    }
    const operator = operatorMap[dropdown_drop];
    // TODO: Assemble python into the code variable.
    const code = `while ${value_a} ${operator} ${value_b}:\n${statement_c}`;
    return code;
  }
  pythonGenerator.forBlock['defjp'] = function(block,generator) {
    const text_name = block.getFieldValue('NAME');
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const statement_b = generator.statementToCode(block, 'B');
  
    // TODO: Assemble python into the code variable.
    const code = `def ${text_name} (${value_a}):\n${statement_b}`;
    return code;
  }
  pythonGenerator.forBlock['returnjp'] = function(block,generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `return ${value_a}\n`;
    return code;
  }
  pythonGenerator.forBlock['usedefjp'] = function(block,generator) {
    const text_name = block.getFieldValue('name');
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
  
  
    // TODO: Assemble python into the code variable.
    const code = `${text_name}(${value_a})`;
    return [code,Order.ATOMIC];
  }
  pythonGenerator.forBlock['usearrayjp'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const value_b = generator.valueToCode(block, 'B', Order.ATOMIC);
    const value_c = generator.valueToCode(block, 'C', Order.ATOMIC);
    const code = `${value_a}[${value_b}]${value_c}`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['appendjp'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `.append(${value_a})\n`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['removejp'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `.remove(${value_a})\n`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['popjp'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `.pop(${value_a})\n`;
    return [code, Order.ATOMIC];
  }
  pythonGenerator.forBlock['claerjp'] = function(block,generator) {
    const value_a = generator.valueToCode(block, 'A', Order.ATOMIC);
    const code = `.clear(${value_a})\n`;
    return [code, Order.ATOMIC];
  }
  
}


export default customblocks;