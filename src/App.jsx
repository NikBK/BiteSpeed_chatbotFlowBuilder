import { useCallback } from "react";
import { addEdge, useNodesState, useEdgesState } from "reactflow";

import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";
import HomeLayout from "./components/HomeLayout";
import MainApp from "./components/MainApp";

import "reactflow/dist/style.css";
import "./App.css";


export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => {
      connection.animated = true;
      setEdges((edges) => addEdge(connection, edges))
    },
    [setEdges]
  );

  const handleDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = event.target.getBoundingClientRect();
    const data = JSON.parse(event.dataTransfer.getData('application/reactflow') || {});
    const type = data.type;
    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };

    const newNode = {
      id: Date.now().toString(),
      type,
      position,
      data: { label: data?.msg || "" },
    };

    setNodes((els) => els.concat(newNode));
  };

  const handleDragOver = (event) => event.preventDefault();


  return (
    <>
      <HomeLayout handleDragOver={handleDragOver} handleDrop={handleDrop} >
        <MainApp nodes={nodes} onNodesChange={onNodesChange} edges={edges} onEdgesChange={onEdgesChange} onConnect={onConnect} />
      </HomeLayout>
    </>
  );
}
