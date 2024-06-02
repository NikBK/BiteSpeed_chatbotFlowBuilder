import { MarkerType } from "reactflow";

export const edgeTypes = {
    // Add your custom edge types here!
};

export const edgeProperties = {
    animated: true,
    markerEnd: {
        type: MarkerType.ArrowClosed,
    },
    style: { stroke: 'rgb(118 198 255)', strokeWidth: 2 },
}