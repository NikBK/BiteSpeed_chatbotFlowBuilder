import React, { createContext, useCallback, useEffect, useRef } from 'react';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    useNodesState,
    useEdgesState,
} from 'reactflow';
import { edgeProperties } from '../edges';

export const FlowContext = createContext();

const defaultNodes = [
    {
        id: 'node-1',
        type: 'msg-node',
        position: { x: 0, y: 0 },
        data: { label: 'Initial Message node' },
    },
    // {
    //     id: 'node-2',
    //     type: 'input-node',
    //     position: { x: 25, y: 70 },
    //     data: { label: 'Initial Input node' },
    // },
    // {
    //     id: 'node-3',
    //     position: { x: 50, y: 170 },
    //     data: { label: 'Initial Default node' },
    // },
    // {
    //     id: 'node-4',
    //     type: 'text-node',
    //     position: { x: 75, y: 220 },
    //     data: { label: 'Initial Text node' },
    // },

];

const defaultEdges = [];

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

    useEffect(() => {
        window.localStorage.setItem('nodes', JSON.stringify(nodes));
        window.localStorage.setItem('edges', JSON.stringify(edges));
    }, [nodes, edges]);

    const data = {
        nodes,
        edges,
        setNodes,
        setEdges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        ref,
    };

    return (
        <FlowContext.Provider value={data}>
            {children}
        </FlowContext.Provider>
    );
};