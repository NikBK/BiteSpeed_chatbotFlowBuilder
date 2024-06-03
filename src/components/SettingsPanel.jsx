import React, { useContext } from 'react';
import { FlowContext } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


// SettingsPanel component for updating node labels
export const SettingsPanel = () => {
    const { setNodes, ref, setSettingsPanelVisible } = useContext(FlowContext);

    // Update the selected node label and close the settingsPanel
    const handleUpdate = (e) => {
        const inputValue = ref.current.value.trim();
        const nodeId = ref.id;

        if (!inputValue || !nodeId) return;

        setNodes((nodes) => {
            return nodes.map((node) => {
                if (node.id === nodeId) {
                    node.data.label = inputValue;
                    ref.fn(inputValue);
                    ref.current.value = '';
                    ref.id = null;
                    ref.fn = null;
                }
                return node;
            });
        });

        // Closing settings panel after update
        closeSettingsPanel();
    };

    const closeSettingsPanel = () => setSettingsPanelVisible(false);

    return (
        <>
            <h3 className='text-center'>Message</h3>
            <div className='flex flex-col gap-10'>
                <textarea
                    type="text"
                    name='text'
                    ref={ref}
                    className='max-w-full min-w-60 max-h-200 min-h-40'
                />
                <button onClick={handleUpdate} className='pointer custom-button'>
                    Update
                </button>
            </div>
            <button onClick={closeSettingsPanel} className='pointer absolute top-10 right-10 outline-none border-none font-20'>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </>
    );
};