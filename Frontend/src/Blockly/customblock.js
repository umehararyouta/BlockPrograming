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
    Blockly.Blocks['input']={
      init:function(){
        this.jsonInit(
          {
            "type": "input",
            "message0": "input() %1",
            "args0": [
              {
                "type": "input_value",
                "name": "NAME"
              }
            ],
            "output": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
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
      var code = `print${value_print}\n`;
      return code;
    };
    pythonGenerator.forBlock['input'] = function(block, generator) {
      var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
      // TODO: Assemble python into code variable.
      var code = `input()${value_name}`;
      return [code,Order.NONE];
    };
      
}


export default customblocks;