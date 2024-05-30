import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import { NodesPanel } from "./NodesPanel";
import { nodeTypes } from '../nodes';
import { edgeTypes } from '../edges';


const MainApp = ({ nodes, onNodesChange, edges, onEdgesChange, onConnect }) => {
    return (
        <>
            <aside className="w-20 py-20 px-10 bg-color-f0f0f0 flex flex-col justify-between" >
                <NodesPanel />
            </aside>

            <div className="flex-1">
                <ReactFlow
                    nodes={nodes}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    edgeTypes={edgeTypes}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </>
    );
}

export default MainApp;
