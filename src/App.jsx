import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import TextUpdaterNode from './components/TextUpdaterNode.jsx';

import 'reactflow/dist/style.css';
import './components/text-updater-node.css';

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: 'node-2',
    type: 'textUpdater',
    targetPosition: 'top',
    position: { x: 0, y: 200 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'textUpdater',
    targetPosition: 'top',
    position: { x: 200, y: 200 },
    data: { label: 'node 3' },
  },
];

const sidebarNode = [
  {
    id: 'sidebar-node',
    type: 'textUpdater',
    position: { x: 500, y: 100 },
    data: { label: 'Drag me!' },
  },
];

const initialEdges = [
  // { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
  // { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

const handleDragStart = (event, type, msg) => {
  event.dataTransfer.setData(
    'application/reactflow',
    JSON.stringify({ type, msg })
  );
};

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const handleDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = event.target.getBoundingClientRect();
    const data = JSON.parse(
      event.dataTransfer.getData('application/reactflow')
    );
    const type = data.type;
    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };

    const newNode = {
      id: Date.now().toString(),
      type,
      position,
      data: { label: data?.msg },
    };

    setNodes((els) => els.concat(newNode));
  };

  const handleDragOver = (event) => event.preventDefault();

  return (
    <div
      style={{ height: '100vh', display: 'flex' }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div
        style={{ width: '20%', backgroundColor: '#f0f0f0', padding: '10px' }}
      >
        <NodesPanel />
      </div>

      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={rfStyle}
        >
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

const NodesPanel = () => {
  return (
    <>
      <h3>Sidebar</h3>

      <Dragger
        style={{ border: '1px solid #ccc', padding: '8px' }}
        dragStart={(event) => handleDragStart(event, 'textUpdater')}
      />

      <Dragger
        style={{ border: '1px solid #ccc', padding: '8px' }}
        dragStart={(event) => handleDragStart(event, 'node', 'testing 123')}
      />
    </>
  );
};

const Dragger = ({ dragStart, style }) => {
  return <div draggable onDragStart={dragStart} style={style}></div>;
};
