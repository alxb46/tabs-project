import React, {useEffect, useState} from 'react';
import styles from '../Tabs/tabs.module.css';
import ContextMenu from "../ContextMenu/ContextMenu.jsx";

const Tab = ({ label, isActive, onClick }) => {
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

    const handleMenuItemClick = () => {
        console.log('Menu item clicked');
        setIsMenuVisible(false);
    };

    // Закрытие меню при клике вне его
    const handleClickOutside = (e) => {
        if (e.target.closest(`.${styles.contextMenu}`)) return; // Игнорируем клики внутри меню
        setIsMenuVisible(false); // Закрываем меню при клике вне
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div onContextMenu={handleContextMenu}> {/* Добавляем обработчик контекстного меню */}
            <button
                className={isActive ? styles.active : ''}
                onClick={onClick}
            >
                {label}
            </button>
            {isMenuVisible && (
                <ContextMenu
                    position={menuPosition}
                    onClose={() => setIsMenuVisible(false)}
                    onMenuItemClick={handleMenuItemClick}
                />
            )}
        </div>
    );
};

export default Tab;