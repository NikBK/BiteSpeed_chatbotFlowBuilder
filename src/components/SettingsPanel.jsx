import React, { useContext } from 'react';
import { FlowContext } from '../store';

export const SettingsPanel = () => {
    const { setNodes, ref } = useContext(FlowContext);

    const handleUpdate = (e) => {
        console.log("before ", ref);
        if (ref.current && ref.current.value && ref.id) {
            console.log("here in handleUpdate");
            setNodes((nds) =>
                nds.map((nd) => {
                    if (nd.id === ref.id) {
                        console.log('matched ', nd.data.label, ref.current.value);
                        nd.data.label = ref.current.value;
                        ref.fn(ref.current.value);
                        ref.current.value = '';
                        ref.id = null;
                        ref.fn = null;
                        console.log("after ", ref);
                    }
                    return nd;
                })
            );
        }
    };

    return (
        <div
            style={{
                backgroundColor: '#f1f0f1',
                height: '100vh',
                padding: '10px',
                alignItems: 'center',
            }}
        >
            <h2 className='text-center'>Settings</h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
            >
                <textarea
                    type="text"
                    ref={ref}
                    style={{
                        maxHeight: '200px',
                        maxWidth: '200px',
                        minWidth: '60px',
                        minHeight: '20px',
                    }}
                />
                <button onClick={handleUpdate} style={{ cursor: 'pointer' }}>
                    Update
                </button>
            </div>
        </div>
    );
};