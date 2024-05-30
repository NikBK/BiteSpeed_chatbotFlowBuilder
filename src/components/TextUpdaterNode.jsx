import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function TextUpdaterNode({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <div>
                <label htmlFor="text">Send Message:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
            </div>
            <Handle
                type="target"
                position={Position.Left}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default TextUpdaterNode;
