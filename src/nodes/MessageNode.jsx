import React, { useState } from "react";
import { Handle, Position } from "reactflow";

const textAreaClassNames = "nodrag b-1-grey overflow-auto max-w-full min-w-100 max-h-200";

export function MessageNode({ data }) {
    const [message, setMessage] = useState(data?.label || "");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        // We add this class to use the same styles as React Flow's default nodes.
        <div className="react-flow__node-default bg-color-b2f0e3">
            <div>
                <label htmlFor="text">Send Message:</label>
                <textarea id="text" name="text" value={message} onChange={handleChange} className={textAreaClassNames} />
            </div>
            <Handle
                type="target"
                position={Position.Left}
                id="a"
            />
            <Handle
                type="source"
                position={Position.Right}
                id="b"
            />
        </div>
    );
}
