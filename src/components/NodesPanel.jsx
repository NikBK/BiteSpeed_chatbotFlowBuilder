import { nodeNames } from "../nodes/index.js";
import { Dragger } from "./index.js";
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';


const draggerClassNames = "p-8 text-center pointer b-1-ccc text-5d69b3";

export const NodesPanel = () => {
    const handleDragStart = (event, type, msg) => {
        const data = JSON.stringify({ type, msg });
        event.dataTransfer.setData('application/reactflow', data);
    };

    return (
        <>
            <div>
                <h3 className="text-center">Nodes Panel</h3>

                <div className="flex flex-col gap-10">
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
            </div>

            <button className="pointer p-10 custom-button">Save Changes</button>
        </>
    );
};