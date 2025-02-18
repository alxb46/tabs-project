import React from 'react';
import styles from './contextMenu.module.css';

const ContextMenu = ({ position, onClose, onMenuItemClick, isPinned }) => {
    return (
        <div
            className={styles.contextMenu}
            style={{ left: position.x, top: position.y }}
            onClick={(e) => e.stopPropagation()}
        >
            <ul>
                <li onClick={onMenuItemClick}>
                    {isPinned ? 'Unpin' : 'Pin'}
                </li>
            </ul>
        </div>
    );
};

export default ContextMenu;
