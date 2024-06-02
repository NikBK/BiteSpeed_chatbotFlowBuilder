import React, { useContext } from 'react';
import { FlowContext } from '../store';

const HomeLayout = ({ children }) => {
    const { setNodes } = useContext(FlowContext);

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
        <div
            className="flex h-100vh"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {children}
        </div>
    );
}

export default HomeLayout;
