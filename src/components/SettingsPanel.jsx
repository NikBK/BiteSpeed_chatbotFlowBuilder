import React, { useContext } from 'react';
import { FlowContext } from '../store';

export const SettingsPanel = () => {
    const { setNodes, ref } = useContext(FlowContext);

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
    };

    return (
        <div className='bg-color-f1f0f1 h-100vh p-10 items-center'>
            <h2 className='text-center'>Message</h2>
            <div className='flex flex-col gap-10'>
                <textarea
                    type="text"
                    name='text'
                    ref={ref}
                    className='max-h-200 max-w-200 min-w-60 min-h-20'
                />
                <button onClick={handleUpdate} className='pointer'>
                    Update
                </button>
            </div>
        </div>
    );
};