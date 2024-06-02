import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Dragger = ({ dragStart, classes, content, icon }) => {
    return (
        <div draggable onDragStart={dragStart} className={classes} title={content}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <div>{content}</div>
        </div>
    );
};
