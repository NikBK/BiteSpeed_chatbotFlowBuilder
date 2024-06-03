import React, { useContext, useEffect, useRef, useState } from 'react';
import { Position } from 'reactflow';
import { FlowContext } from '../store';
import CustomHandle from '../handles/customHandle';


// MsgNode component for handling message nodes
export const MsgNode = ({ id, data }) => {
    const [val, setVal] = useState(data.label || '');
    const [selected, setSelected] = useState(false);
    const { ref, setSettingsPanelVisible } = useContext(FlowContext);
    const nodeRef = useRef(null);

    // Updates settingsPanel input box with selected node's label
    const onClick = (e) => {
        ref.current.value = val;
        ref.id = id;
        ref.fn = setVal;
        setSelected(true);
        setSettingsPanelVisible(true);
    };

    // Function to determine if source handle is connectable (only 1 conection to source handle)
    const sourceConnect = ({ nodeId, connectedEdges }) => {
        return connectedEdges.filter((edge) => edge.source == nodeId).length < 1;
    }

    // Handling click outside the node to deselect
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
        <>
            <div
                ref={nodeRef}
                className={`react-flow__node-default p-0 selectable ${selected ? 'selected' : ''}`}
                onClick={onClick}
            >
                <CustomHandle type="target" position={Position.Left} id='msg-target' />
                <div className='custom-shadow'>
                    <div className='bg-color-b2f0e3'>Send Message</div>
                    <div className='min-h-8 px-5'>{val}</div>
                </div>
                <CustomHandle type="source" position={Position.Right} id='msg-source' isConnectable={sourceConnect} />
            </div >
        </>
    );
};