import React, { useContext } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';

import { nodeTypes } from '../nodes';
import { edgeTypes, connectionLineStyle } from '../edges';
import { FlowContext } from '../store';
import { NodesPanel, SettingsPanel } from './index.js';


// Component for rendering a flow diagram with conditional rendering of side panels based on settingsPanelVisible
const Flow = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, settingsPanelVisible } = useContext(FlowContext);

    return (
        <>
            {/* Conditional rendering of NodesPanel and SettingsPanel based on settingsPanelVisible */}
            <aside className={`w-20 py-20 px-10 bg-color-f0f0f0 flex flex-col justify-between ${settingsPanelVisible && 'hidden'}`}>
                <NodesPanel />
            </aside>

            <aside className={`w-20 py-20 px-10 bg-color-f0f0f0 flex flex-col justify-start h-full relative ${!settingsPanelVisible && 'hidden'}`} >
                <SettingsPanel />
            </aside>

            {/* Rendering ReactFlow component for displaying flow diagram */}
            <main className="flex-1">
                <ReactFlow
                    nodes={nodes}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    edgeTypes={edgeTypes}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    connectionLineStyle={connectionLineStyle}
                    fitView
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </main>
        </>
    );
}

export default Flow;
