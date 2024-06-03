import { useContext } from "react";
import { faCommentDots, faKeyboard, faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { FlowContext } from "../store/index.jsx";
import { nodeNames } from "../nodes/index.js";
import { Dragger } from "./index.js";
import { displayToast, saveFlowToLocalStorage } from "../utils/index.js";

// CSS class names for Dragger component
const draggerClassNames = "p-8 text-center pointer b-1-ccc text-5d69b3";


export const NodesPanel = () => {
    const { nodes, edges, handleFlowSave } = useContext(FlowContext);

    // Adding 'type' and 'msg' to the event dataTransfer during drag start
    const handleDragStart = (event, type, msg) => {
        const data = JSON.stringify({ type, msg });
        event.dataTransfer.setData('application/reactflow', data);
    };

    // Validates flow save condition and saves the flow to local storage
    const saveFlow = () => {
        const { status, message } = handleFlowSave();

        if (status === 'success') {
            saveFlowToLocalStorage('nodes', nodes);
            saveFlowToLocalStorage('edges', edges);
        }

        displayToast(message, status);
    }

    return (
        <>
            <h3 className="text-center">Nodes Panel</h3>

            <div className="flex flex-col flex-auto gap-10">

                {/* Dragger for Message Node */}
                <Dragger
                    classes={draggerClassNames}
                    dragStart={(event) => handleDragStart(event, nodeNames.MSG_NODE, 'Message Node')}
                    content="message"
                    icon={faCommentDots}
                />

                {/* Dragger for Input Node */}
                <Dragger
                    classes={draggerClassNames}
                    dragStart={(event) => handleDragStart(event, nodeNames.INPUT_NODE)}
                    content="input"
                    icon={faKeyboard}
                />

                {/* Dragger for Text Node */}
                {/* <Dragger
                        classes={draggerClassNames}
                        dragStart={(event) => handleDragStart(event, nodeNames.TEXT_NODE, 'Text Node')}
                        content="text"
                    /> */}

                {/* Dragger for Default Node */}
                <Dragger
                    classes={draggerClassNames}
                    dragStart={(event) => handleDragStart(event, nodeNames.DEFAULT_NODE, 'Default Node')}
                    content="default"
                    icon={faCircleDot}
                />
            </div>

            <button onClick={saveFlow} className="pointer p-10 custom-button">
                Save Changes
            </button>
        </>
    );
};