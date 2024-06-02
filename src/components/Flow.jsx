import React, { useContext } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';

import { nodeTypes } from '../nodes';
import { edgeTypes, connectionLineStyle } from '../edges';
import { FlowContext } from '../store';
import { NodesPanel, SettingsPanel } from './index.js';


const Flow = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, settingsPanelVisible } = useContext(FlowContext);

    return (
        <>
            <aside className={`w-20 py-20 px-10 bg-color-f0f0f0 flex flex-col justify-between ${settingsPanelVisible && 'hidden'}`}>
                <NodesPanel />
            </aside>
            <aside className={`w-20 py-20 px-10 bg-color-f0f0f0 flex flex-col h-full justify-start relative ${!settingsPanelVisible && 'hidden'}`} >
                <SettingsPanel />
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


        </>
    );
}

export default Flow;
