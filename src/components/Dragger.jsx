import React from 'react';

export const Dragger = ({ dragStart, classes, content }) => {
    return (
        <div draggable onDragStart={dragStart} className={classes}>
            {content}
        </div>
    );
};
