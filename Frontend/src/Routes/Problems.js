import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {ReactFlow,Controls, Background, useNodesState} from "@xyflow/react"
import ProgramPage from "./ProgramPage";
import '@xyflow/react/dist/style.css';
import { green } from "@mui/material/colors";
import axios from 'axios';

const initialNode = [
    { id: '1', sourcePosition: 'right', type: 'input', data: { label: '初めに' }, position: { x: 0, y: 0 },},
    { id: '2', sourcePosition: 'right', targetPosition: 'left', data: { label: 'Pythonについて' }, position: { x: 250, y: 0 }, },
    { id: '3', sourcePosition: 'right', targetPosition: 'left', data: { label: '入力と出力' }, position: { x: 500, y: -100 }, },
    { id: '4', sourcePosition: 'right', targetPosition: 'left', data: { label: '変数と代入' }, position: { x: 500, y: 100 }, },
    { id: '5', sourcePosition: 'right', targetPosition: 'left',  data: { label: 'プログラムと計算' }, position: { x: 750, y: 0 }, },
    { id: '6', sourcePosition: 'right', targetPosition: 'left', data: { label: 'データ型' }, position: { x: 750, y: 200 }, },
    { id: '7', sourcePosition: 'right', targetPosition: 'left', data: { label: '余りの便利な使い方' }, position: { x: 1000, y: -200 }, },
    { id: '8', sourcePosition: 'right', targetPosition: 'left', data: { label: '条件分岐' }, position: { x: 1000, y: -100 }, },
    { id: '9', sourcePosition: 'right', targetPosition: 'left', data: { label: '回数ループ' }, position: { x: 1000, y: 100 }, },
    { id: '10', sourcePosition: 'right', targetPosition: 'left', data: { label: '配列' }, position: { x: 1000, y: 200 }, },
    { id: '11', sourcePosition: 'right', targetPosition: 'left', data: { label: 'ネストと論理演算' }, position: { x: 1250, y: -200 }, },
    { id: '12', sourcePosition: 'right', targetPosition: 'left', data: { label: '複雑な分岐' }, position: { x: 1250, y: -100 }, },
    { id: '13', sourcePosition: 'right', targetPosition: 'left', data: { label: '条件ループ' }, position: { x: 1250, y: 100 }, },
    { id: '14', sourcePosition: 'right', targetPosition: 'left', data: { label: '関数' }, position: { x: 1250, y: 200 }, },
    { id: '15', sourcePosition: 'right', targetPosition: 'left', data: { label: '配列の探索' }, position: { x: 1500, y: 0 }, },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e2-4', source: '2', target: '4', animated: true },
    { id: 'e3-5', source: '3', target: '5', animated: true },
    { id: 'e4-5', source: '4', target: '5', animated: true },
    { id: 'e5-7', source: '5', target: '7', animated: true },
    { id: 'e5-8', source: '5', target: '8', animated: true },
    { id: 'e5-9', source: '5', target: '9', animated: true },
    { id: 'e5-10', source: '5', target: '10', animated: true },
    { id: 'e7-11', source: '7', target: '11', animated: true },
    { id: 'e8-12', source: '8', target: '12', animated: true },
    { id: 'e9-13', source: '9', target: '13', animated: true },
    { id: 'e10-14', source: '10', target: '14', animated: true },
    { id: 'e11-15', source: '11', target: '15', animated: true },
    { id: 'e12-15', source: '12', target: '15', animated: true },
    { id: 'e13-15', source: '13', target: '15', animated: true },
    { id: 'e14-15', source: '14', target: '15', animated: true },

];


function Problem() {
    const navigate = useNavigate();
    const onClick = (event, node) => {
        window.open(`/education?id=${node.id}`,'_blank');
        navigate(`/programPage`)
    }
    const [nodes,setNodes] = useNodesState(initialNode);
    // サーバーから進捗管理bitを受け取って、クリア済みのものを緑に
    useEffect(()=>{
        const showprogress=async()=>{
        try{
            const token = localStorage.getItem('token')
            console.log('start get progress');
            const response = await axios.get('http://127.0.0.1:5000/getprogress', { headers: { Authorization: `Bearer ${token}` } ,timeout: 5000});
            console.log('get progress done',response);
            for (let i=0;i<21 ; i++){
                if(response.data.progress &(1<<i)){
                    setNodes((nds) =>
                        nds.map((node) => {
                          if (node.id === (i+1).toString()) {
                            return {
                              ...node,
                              style: {
                                ...node.style,
                                backgroundColor: '#CCFFCC',
                              },
                              hidden: false,
                            };
                          }
                          return node;
                        }),
                      );
                }
            }
            
        }catch(err){
            console.log('error',err)
        }
    }
        showprogress()
    },[])


    return(
        <div style={{ width: '100vw', height: '99vh' }}>
        <ReactFlow
         nodes={nodes}
        edges={initialEdges}
        nodesDraggable={false}
        nodesConnectable={false}
        edgesReconnectable={false}
        edgesFocusable={false}
        fitView
        onNodeClick={onClick}
        >
        <Background variant="dots"gap={16}size={1}/>
        </ReactFlow>
        </div>
    )
}
export default Problem;