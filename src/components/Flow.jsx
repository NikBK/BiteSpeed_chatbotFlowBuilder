import React, { useContext } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';

import { nodeTypes } from '../nodes';
import { edgeTypes } from '../edges';
import { FlowContext } from '../store';
import { NodesPanel, SettingsPanel } from './index.js';


const connectionLineStyle = {
    strokeWidth: 2,
    stroke: 'black',
};

const Flow = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useContext(FlowContext);

    return (
        <>
            <aside className="w-10 py-20 px-10 bg-color-f0f0f0 flex flex-col justify-between" >
                <NodesPanel />
            </aside>

            <main className="flex-1">
                <ReactFlow
                    nodes={nodes}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    edgeTypes={edgeTypes}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                    connectionLineStyle={connectionLineStyle}
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </main>

            <aside className="w-10 py-20 px-10 bg-color-f0f0f0 flex flex-col justify-between" >
                <SettingsPanel />
            </aside>
        </>
    );
}

export default Flow;
