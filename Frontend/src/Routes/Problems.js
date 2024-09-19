import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {ReactFlow,Controls, Background} from "@xyflow/react"
import ProgramPage from "./ProgramPage";
import '@xyflow/react/dist/style.css';

const initialNode = [
    { id: '1', sourcePosition: 'right', type: 'input', data: { label: '初めに' }, position: { x: 0, y: 0 }, },
    { id: '2', sourcePosition: 'right', targetPosition: 'left', data: { label: 'Pythonについて' }, position: { x: 250, y: 0 }, },
    { id: '3', sourcePosition: 'right', targetPosition: 'left', data: { label: '標準入力とプリント文' }, position: { x: 500, y: 0 }, },
    { id: '4', targetPosition: 'left', type:'output', data: { label: 'コメント' }, position: { x: 500, y: 100 }, },
    { id: '5', targetPosition: 'left', type:'output', data: { label: 'インデントによる構文' }, position: { x: 500, y: -100 }, },
    { id: '6', sourcePosition: 'right', targetPosition: 'left', data: { label: 'データ型' }, position: { x: 750, y: 0 }, },
    { id: '7', sourcePosition: 'right', targetPosition: 'left', data: { label: '変数と代入' }, position: { x: 1000, y: 0 }, },
    { id: '8', sourcePosition: 'right', targetPosition: 'left', data: { label: '算術演算子' }, position: { x: 1250, y: 0 }, },
    { id: '9', sourcePosition: 'right', targetPosition: 'left', data: { label: '配列' }, position: { x: 1250, y: -200 }, },
    { id: '10', sourcePosition: 'right', targetPosition: 'left', data: { label: '回数ループ' }, position: { x: 1250, y: -300 }, },
    { id: '11', sourcePosition: 'right', targetPosition: 'left', data: { label: '条件分岐' }, position: { x: 1250, y: 200 }, },
    { id: '12', sourcePosition: 'right', targetPosition: 'left', data: { label: '割り算の便利な使い方' }, position: { x: 1500, y: -100 }, },
    { id: '13', sourcePosition: 'right', targetPosition: 'left', data: { label: '最大と最小' }, position: { x: 1500, y: 0 }, },
    { id: '14', sourcePosition: 'right', targetPosition: 'left', data: { label: '合計と平均' }, position: { x: 1500, y: 100 }, },
    { id: '15', sourcePosition: 'right', targetPosition: 'left', data: { label: '配列の操作' }, position: { x: 1750, y: -200 }, },
    { id: '16', sourcePosition: 'right', targetPosition: 'left', data: { label: '条件ループ' }, position: { x: 1500, y: -300 }, },
    { id: '17', sourcePosition: 'right', targetPosition: 'left', data: { label: '複雑な分岐' }, position: { x: 1500, y: 200 }, },
    { id: '18', sourcePosition: 'right', targetPosition: 'left', data: { label: '余りの便利な使い方' }, position: { x: 1750, y: -100 }, },
    { id: '19', sourcePosition: 'right', targetPosition: 'left', data: { label: '配列とループ' }, position: { x: 1750, y: -300 }, },
    { id: '20', sourcePosition: 'right', targetPosition: 'left', data: { label: 'ネストと条件演算子' }, position: { x: 1750, y: 200 }, },
    { id: '21', targetPosition: 'left', type:'output', data: { label: '配列の探索' }, position: { x: 2000, y: 0 }, },

];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e2-4', source: '2', target: '4', animated: true },
    { id: 'e2-5', source: '2', target: '5', animated: true },
    { id: 'e3-6', source: '3', target: '6', animated: true },
    { id: 'e6-7', source: '3', target: '7', animated: true },
    { id: 'e7-8', source: '7', target: '8', animated: true },
    { id: 'e7-9', source: '7', target: '9', animated: true },
    { id: 'e7-10', source: '7', target: '10', animated: true },
    { id: 'e7-11', source: '7', target: '11', animated: true },
    { id: 'e11-17', source: '11', target: '17', animated: true },
    { id: 'e17-20', source: '17', target: '20', animated: true },
    { id: 'e8-13', source: '8', target: '13', animated: true },
    { id: 'e8-14', source: '8', target: '14', animated: true },
    { id: 'e8-12', source: '8', target: '12', animated: true },
    { id: 'e9-15', source: '9', target: '15', animated: true },
    { id: 'e12-18', source: '12', target: '18', animated: true },
    { id: 'e10-16', source: '10', target: '16', animated: true },
    { id: 'e16-19', source: '16', target: '19', animated: true },
    { id: 'e19-21', source: '19', target: '21', animated: true },
    { id: 'e20-21', source: '20', target: '21', animated: true },
    { id: 'e18-21', source: '18', target: '21', animated: true },
    { id: 'e13-21', source: '13', target: '21', animated: true },
    { id: 'e14-21', source: '14', target: '21', animated: true },
    { id: 'e15-21', source: '15', target: '21', animated: true },
];


function Problem() {
    const navigate = useNavigate();
    const onClick = (event, node) => navigate(`/programpage?=${node.id}`);
    return(
        <div style={{ width: '100vw', height: '99vh' }}>
        <ReactFlow
        nodes={initialNode}
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