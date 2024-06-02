import React, { useContext } from 'react';
import { FlowContext } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const SettingsPanel = () => {
    const { setNodes, ref, setSettingsPanelVisible } = useContext(FlowContext);

    const handleUpdate = (e) => {
        if (ref.current && ref.current.value.trim() && ref.id) {
            setNodes((nds) =>
                nds.map((nd) => {
                    if (nd.id === ref.id) {
                        nd.data.label = ref.current.value;
                        ref.fn(ref.current.value);
                        ref.current.value = '';
                        ref.id = null;
                        ref.fn = null;
                    }
                    return nd;
                })
            );
        }
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
            <button className='pointer absolute top-10 right-10 outline-none border-none font-20' onClick={closeSettingsPanel}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </>
    );
};