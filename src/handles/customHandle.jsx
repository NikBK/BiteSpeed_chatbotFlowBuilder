import React, { useMemo } from 'react';
import { getConnectedEdges, Handle, useNodeId, useStore } from 'reactflow';

// Selector function for getting necessary data from the store
const selector = (s) => ({
    nodeInternals: s.nodeInternals,
    edges: s.edges,
});


// CustomHandle component for customized handle behavior
const CustomHandle = (props) => {
    const { nodeInternals, edges } = useStore(selector);
    const nodeId = useNodeId();

    // Memoized calculation for Handle connectability
    const isHandleConnectable = useMemo(() => {
        // Check if 'isConnectable' prop is a function, then call it with nodeId and connectedEdges to validate the condition
        if (typeof props.isConnectable === 'function') {
            const node = nodeInternals.get(nodeId);
            const connectedEdges = getConnectedEdges([node], edges);

            return props.isConnectable({ nodeId, connectedEdges });
        }

        // Check if 'isConnectable' prop is a number, then return whether the number of connected edges is less than the specified limit
        if (typeof props.isConnectable === 'number') {
            const node = nodeInternals.get(nodeId);
            const connectedEdges = getConnectedEdges([node], edges);

            return connectedEdges.length < props.isConnectable;
        }

        return props.isConnectable;
    }, [nodeInternals, edges, nodeId, props.isConnectable]);

    // Rendering Handle with updated connectability
    return (
        <Handle {...props} isConnectable={isHandleConnectable}></Handle>
    );
};

export default CustomHandle;
