import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    useNodesState,
    useEdgesState,
} from 'reactflow';
import { edgeProperties } from '../edges';

export const FlowContext = createContext();

// const defaultNodes = [
//     {
//         id: 'node-1',
//         type: 'msg-node',
//         position: { x: 0, y: 0 },
//         data: { label: 'Initial Message node' },
//     },
//     // {
//     //     id: 'node-2',
//     //     type: 'input-node',
//     //     position: { x: 25, y: 70 },
//     //     data: { label: 'Initial Input node' },
//     // },
//     // {
//     //     id: 'node-3',
//     //     position: { x: 50, y: 170 },
//     //     data: { label: 'Initial Default node' },
//     // },
//     // {
//     //     id: 'node-4',
//     //     type: 'text-node',
//     //     position: { x: 75, y: 220 },
//     //     data: { label: 'Initial Text node' },
//     // },

// ];

const defaultNodes = [
    {
        "id": "node-1",
        "type": "msg-node",
        "position": {
            "x": -177,
            "y": 91
        },
        "data": {
            "label": "Initial Message node"
        },
    },
    {
        "id": "1717358532441",
        "type": "msg-node",
        "position": {
            "x": 218.51171875,
            "y": -15
        },
        "data": {
            "label": "Message Node"
        },
    },
    {
        "id": "1717358533565",
        "type": "msg-node",
        "position": {
            "x": 24.51171875,
            "y": 38
        },
        "data": {
            "label": "Message Node"
        },
    }
];

const defaultEdges = [
    {
        "source": "node-1",
        "sourceHandle": "msg-source",
        "target": "1717358533565",
        "targetHandle": "msg-target",
        "animated": true,
        "markerEnd": {
            "type": "arrowclosed"
        },
        "style": {
            "stroke": "rgb(118 198 255)",
            "strokeWidth": 2
        },
        "id": "reactflow__edge-node-1msg-source-1717358533565msg-target"
    },
    {
        "source": "1717358533565",
        "sourceHandle": "msg-source",
        "target": "1717358532441",
        "targetHandle": "msg-target",
        "animated": true,
        "markerEnd": {
            "type": "arrowclosed"
        },
        "style": {
            "stroke": "rgb(118 198 255)",
            "strokeWidth": 2
        },
        "id": "reactflow__edge-1717358533565msg-source-1717358532441msg-target"
    }
];

const localNodes = window.localStorage.getItem('nodes');
const initialNodes = localNodes ? JSON.parse(localNodes) : defaultNodes;

if (!localNodes) {
    window.localStorage.setItem('nodes', JSON.stringify(initialNodes));
}

const localEdges = window.localStorage.getItem('edges');
const initialEdges = localEdges ? JSON.parse(localEdges) : defaultEdges;

if (!localEdges) {
    window.localStorage.setItem('edges', JSON.stringify(initialEdges));
}

export const FlowContextProvider = ({ children }) => {
    const [settingsPanelVisible, setSettingsPanelVisible] = useState(false);

    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    const onConnect = useCallback(
        (params) => {
            const connection = {
                ...params,
                ...edgeProperties
            };
            setEdges((eds) => addEdge(connection, eds))
        },
        [setEdges]
    );

    const ref = useRef('settings');

    // const handleFlowSave = () => {

    //     window.localStorage.setItem('nodes', JSON.stringify(nodes));
    //     window.localStorage.setItem('edges', JSON.stringify(edges));
    // }

    // useEffect(() => {
    //     window.localStorage.setItem('nodes', JSON.stringify(nodes));
    //     window.localStorage.setItem('edges', JSON.stringify(edges));
    // }, [nodes, edges]);

    const data = {
        nodes,
        edges,
        setNodes,
        setEdges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        ref,
        settingsPanelVisible,
        setSettingsPanelVisible,
        // handleFlowSave,
    };

    return (
        <FlowContext.Provider value={data}>
            {children}
        </FlowContext.Provider>
    );
};