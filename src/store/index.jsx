import React, { createContext, useCallback, useRef, useState } from 'react';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    useNodesState,
    useEdgesState,
} from 'reactflow';
import { edgeProperties } from '../edges';
import { initializeLocalStorage } from '../utils';


// Creating context for flow data management
export const FlowContext = createContext();

// Initial nodes configuration
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

// Initial edges configuration
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

// Setup 'nodes' in localStorage
const { initialData: initialNodes } = initializeLocalStorage('nodes', defaultNodes);

// Setup 'edges' in localStorage
const { initialData: initialEdges } = initializeLocalStorage('edges', defaultEdges);


export const FlowContextProvider = ({ children }) => {
    // State for settings panel visibility
    const [settingsPanelVisible, setSettingsPanelVisible] = useState(false);

    // Reference for settings input field
    const ref = useRef('settings');

    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState(initialEdges);

    // Callback function for updating nodes
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );

    // Callback function for updating edges
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    // Callback function for adding new edge
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

    // Validates flow save condition
    const handleFlowSave = () => {
        const connectedTargets = (new Set(edges.map(edge => edge.target))).size;

        // Check whether more than 1 target handle is not connected by an edge
        if (connectedTargets < nodes.length - 1) {
            return { status: 'error', message: 'Cannot save flow' };
        }
        else {
            return { status: 'success', message: 'Flow saved' };
        }
    }

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
        handleFlowSave,
    };

    {/* Providing flow context to children */ }
    return (
        <FlowContext.Provider value={data}>
            {children}
        </FlowContext.Provider>
    );
};