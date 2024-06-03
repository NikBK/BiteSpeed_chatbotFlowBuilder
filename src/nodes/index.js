import { InputNode } from "./InputNode";
import { MsgNode } from "./MsgNode";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { TextNode } from "./TextNode";

// Mapping node type to their corresponding components
export const nodeTypes = {
    "position-logger": PositionLoggerNode,
    "input-node": InputNode,
    "text-node": TextNode,
    "msg-node": MsgNode,
    // Add any of your custom nodes here!
};

// Mapping node names to their corresponding types for easier uasge
export const nodeNames = {
    'POSITION_LOGGER_NODE': 'position-logger',
    'INPUT_NODE': 'input-node',
    'TEXT_NODE': 'text-node',
    'MSG_NODE': 'msg-node',
    'DEFAULT_NODE': 'node',
}