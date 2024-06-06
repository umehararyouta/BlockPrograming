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
    pythonGenerator.forBlock['if'] = function(block,generator) {
        var value_if_main = generator.valueToCode(block, 'if_main', Order.ATOMIC);
        var dropdown_if_dropdown = block.getFieldValue('if_dropdown');
        var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
        var statements_if_statement = generator.statementToCode(block, 'if_statement');
        var operatorMap = {
            'equal': '==',
            'not_equal': '!=',
            'greater_than': '>',
            'less_than': '<',
            'greater_than_or_equal': '>=',
            'less_than_or_equal': '<='
        };
        var operator = operatorMap[dropdown_if_dropdown];
        var code = `if ${value_if_main} ${operator} ${value_name}:\n${statements_if_statement}`;
        return code;
      };
}


export default customblocks;