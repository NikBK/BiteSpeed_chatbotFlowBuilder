import React, { useState } from "react";
import { Handle, Position } from "reactflow";

// CSS class names for textarea
const textAreaClassNames = "nodrag b-1-grey overflow-auto max-w-full min-w-100 max-h-200";


// InputNode component for handling user input
export function InputNode({ id, data }) {
    const [message, setMessage] = useState(data?.label || "");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        // We add this class to use the same styles as React Flow's default nodes.
        <div className="react-flow__node-default bg-color-b2f0e3">
            <label htmlFor="text">Send Input message:</label>
            <textarea
                id="text"
                name="text"
                placeholder="Type your message here..."
                value={message}
                onChange={handleChange}
                className={textAreaClassNames}
            />
            <Handle
                type="target"
                position={Position.Left}
                id="input-target"
            />
            <Handle
                type="source"
                position={Position.Right}
                id="input-source"
            />
        </div>
    );
}
