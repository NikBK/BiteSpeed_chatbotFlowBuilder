import { MarkerType } from "reactflow";

export const edgeTypes = {
    // Add your custom edge types here!
};

// styles for the edge
export const edgeProperties = {
    animated: true,
    markerEnd: {
        type: MarkerType.ArrowClosed,
    },
    style: { stroke: 'rgb(118 198 255)', strokeWidth: 2 },
}

// edge style while connecting nodes
export const connectionLineStyle = {
    strokeWidth: 2,
    stroke: 'black',
};