import React from 'react';

const HomeLayout = ({ children, handleDrop, handleDragOver }) => {
    return (
        <div
            className="flex h-100vh"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {children}
        </div>
    );
}

export default HomeLayout;
