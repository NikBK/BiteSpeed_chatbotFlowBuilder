import React, { useContext, useEffect, useRef, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { FlowContext } from '../store';

export const MsgNode = ({ id, data }) => {
    const [val, setVal] = useState(data.label || '');

    const [selected, setSelected] = useState(false);
    const { ref } = useContext(FlowContext);
    const nodeRef = useRef(null);

    const onClick = (event) => {
        ref.current.value = val;
        ref.id = id;
        ref.fn = setVal;
        setSelected(true)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nodeRef.current && !nodeRef.current.contains(event.target)) {
                setSelected(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={nodeRef}
            className={`react-flow__node-default selectable ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <Handle type="target" position={Position.Left} />
            <div>{val}</div>
            <Handle type="source" position={Position.Right} />
        </div >
    );
};