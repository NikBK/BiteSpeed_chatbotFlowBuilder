import React, { useState } from "react";
import { Handle, Position } from "reactflow";


export function TextNode({ data }) {
    const [message, setMessage] = useState(data?.label || "");

    const handleChange = (event) => {
        setMessage(event.target.innerText);
    }

    return (
        <div className="react-flow__node-default bg-color-b2f0e3">
            <div
                contentEditable={true}
                onBlur={handleChange} // Use onBlur to trigger when the user exits the editable area
                dangerouslySetInnerHTML={{ __html: message }} // Use dangerouslySetInnerHTML to set the initial HTML content
            />
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
