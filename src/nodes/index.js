import { MessageNode } from "./MessageNode";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { TextNode } from "./TextNode";

export const initialNodes = [
    // {
    //     id: "a",
    //     type: "input",
    //     position: { x: 0, y: 0 },
    //     data: { label: "wire" }
    // },
    // {
    //     id: "b",
    //     type: "position-logger",
    //     position: { x: -100, y: 100 },
    //     data: { label: "drag me!" },
    // },
    // {
    //     id: "c",
    //     position: { x: 100, y: 100 },
    //     data: { label: "your ideas" }
    // },
    // {
    //     id: "d",
    //     type: "output",
    //     position: { x: 0, y: 200 },
    //     data: { label: "with React Flow" },
    // },
    {
        id: "e",
        type: "msg-node",
        position: { x: 0, y: 300 },
        data: { label: "My message node" },
    },
];

export const nodeTypes = {
    "position-logger": PositionLoggerNode,
    "msg-node": MessageNode,
    "text-node": TextNode,
    // Add any of your custom nodes here!
};
