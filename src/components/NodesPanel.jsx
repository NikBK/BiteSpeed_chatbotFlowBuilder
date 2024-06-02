import { useContext } from "react";
import { nodeNames } from "../nodes/index.js";
import { Dragger } from "./index.js";
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { FlowContext } from "../store/index.jsx";
import { Bounce, toast } from 'react-toastify';

const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
};


const draggerClassNames = "p-8 text-center pointer b-1-ccc text-5d69b3";

export const NodesPanel = () => {
    const { nodes, edges } = useContext(FlowContext);

    const handleDragStart = (event, type, msg) => {
        const data = JSON.stringify({ type, msg });
        event.dataTransfer.setData('application/reactflow', data);
    };

    const handleFlowSave = () => {
        const connectedTargets = (new Set(edges.map(edge => edge.target))).size;

        if (connectedTargets < nodes.length - 1) {
            toast.error("Cannot save flow", toastOptions);
        }
        else {
            window.localStorage.setItem('nodes', JSON.stringify(nodes));
            window.localStorage.setItem('edges', JSON.stringify(edges));
            toast.success("Flow saved", toastOptions);
        }

    }

    return (
        <>
            <h3 className="text-center">Nodes Panel</h3>

            <div className="flex flex-col flex-auto gap-10">
                <Dragger
                    classes={draggerClassNames}
                    dragStart={(event) => handleDragStart(event, nodeNames.MSG_NODE, 'Message Node')}
                    content="message"
                    icon={faCommentDots}
                />

                <Dragger
                    classes={draggerClassNames}
                    dragStart={(event) => handleDragStart(event, nodeNames.INPUT_NODE)}
                    content="input"
                />

                {/* <Dragger
                        classes={draggerClassNames}
                        dragStart={(event) => handleDragStart(event, nodeNames.TEXT_NODE, 'Text Node')}
                        content="text"
                    /> */}

                <Dragger
                    classes={draggerClassNames}
                    dragStart={(event) => handleDragStart(event, nodeNames.DEFAULT_NODE, 'Default Node')}
                    content="default"
                />
            </div>

            <button className="pointer p-10 custom-button" onClick={handleFlowSave}>Save Changes</button>
        </>
    );
};