import React from 'react';
import styles from './contextMenu.module.css';

const ContextMenu = ({ position, onClose, onMenuItemClick }) => {
    return (
        <div
            className={styles.contextMenu}
            style={{ left: position.x, top: position.y }}
            onClick={(e) => e.stopPropagation()}
        >
            <ul>
                <li onClick={onMenuItemClick}>Pin</li>
            </ul>
        </div>
    );
};

export default ContextMenu;