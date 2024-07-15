import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {ReactFlow,Controls, Background} from "@xyflow/react"
import ProgramPage from "./ProgramPage";
import '@xyflow/react/dist/style.css';

const initialNode=[
    {id:'1',sourcePosition:'right',data:{label:'初めに'},position:{x:0,y:0},draggable:false},
    {id:'2',sourcePosition:'right',data:{label:'初めに'},position:{x:50,y:0},draggable:false},
];
const initialEdges =[
    { id: 'e1-2', source: '1', target: '2', animated: true ,style: { pointerEvents: 'none' }},
];

function Problem() {
    return(
        <div style={{ width: '100vw', height: '93vh' }}>
        <ReactFlow
        nodes={initialNode}
        edges={initialEdges}
        fitView
        >
        <Background variant="dots"gap={16}size={1}/>
        </ReactFlow>
        </div>
    )
}
export default Problem;