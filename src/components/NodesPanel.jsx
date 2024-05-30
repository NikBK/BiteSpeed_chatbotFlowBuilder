import { Dragger } from "./Dragger";

const draggerClassNames = "p-8 text-center pointer b-1-ccc";

export const NodesPanel = () => {
    const handleDragStart = (event, type, msg) => {
        const data = JSON.stringify({ type, msg });
        event.dataTransfer.setData('application/reactflow', data);
    };

    return (
        <>
            <div>
                <h3 className="text-center">Sidebar</h3>

                <div className="flex flex-col gap-10">
                    <Dragger
                        classes={draggerClassNames}
                        dragStart={(event) => handleDragStart(event, 'msg-node')}
                        content="message"
                    />

                    <Dragger
                        classes={draggerClassNames}
                        dragStart={(event) => handleDragStart(event, 'text-node', 'text node')}
                        content="text"
                    />

                    <Dragger
                        classes={draggerClassNames}
                        dragStart={(event) => handleDragStart(event, 'node', 'testing node')}
                        content="non-message"
                    />
                </div>
            </div>

            <button className="pointer">Save Changes</button>
        </>
    );
};