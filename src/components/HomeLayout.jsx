import React, { useContext } from 'react';
import { FlowContext } from '../store';

const HomeLayout = ({ children }) => {
    const { setNodes } = useContext(FlowContext);

    // Handling drop event for adding new node
    const handleDrop = (event) => {
        event.preventDefault();

        const reactFlowBounds = event.target.getBoundingClientRect();
        const { type, msg } = JSON.parse(event.dataTransfer.getData('application/reactflow') || {});
        const position = {
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        };

        const newNode = {
            id: Date.now().toString(),
            type,
            position,
            data: { label: msg || "" },
        };

        // Adding new node to the flow
        setNodes((els) => els.concat(newNode));
    };

    // Allow dropping on an element
    const handleDragOver = (event) => event.preventDefault();

    return (
        <div
            className="flex h-100vh relative"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {children}
        </div>
    );
}

export default HomeLayout;
