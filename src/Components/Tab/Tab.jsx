import React, { useEffect, useState } from 'react';
import styles from '../Tabs/tabs.module.css';
import ContextMenu from "../ContextMenu/ContextMenu.jsx";

const Tab = ({ label, isActive, onClick, onPin, onUnpin, isPinned }) => {
    const [menuPosition, setMenuPosition] = useState(null);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const rect = e.target.getBoundingClientRect();
        const position = {
            x: rect.left,
            y: rect.bottom,
        };
        setMenuPosition(position);
        setIsMenuVisible(true);
    };

    const handleMenuItemClick = (e) => {
        if (e.target.innerText === 'Pin') {
            onPin(); // Закрепляем вкладку
        } else if (e.target.innerText === 'Unpin') {
            onUnpin(); // Открепляем вкладку
        }
        setIsMenuVisible(false); // Закрываем меню
    };

    // Закрытие меню при клике вне его
    const handleClickOutside = (e) => {
        if (e.target.closest(`.${styles.contextMenu}`)) return;
        setIsMenuVisible(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div onContextMenu={handleContextMenu} className={`${styles.tab} ${isActive ? styles.active : ''}`}>
            <button className={`${styles.tabButton} ${isPinned ? styles.pinned : ''}`} onClick={onClick}>
                {label}
            </button>
            {isMenuVisible && (
                <ContextMenu
                    position={menuPosition}
                    onClose={() => setIsMenuVisible(false)}
                    onMenuItemClick={handleMenuItemClick}
                    isPinned={isPinned} // передаем информацию о закрепленной вкладке
                />
            )}
        </div>
    );
};

export default Tab;
