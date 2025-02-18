import React from 'react';
import styles from '../Tabs/tabs.module.css';

const Tab = ({ label, isActive, onClick }) => {
    return (
        <button
            className={isActive ? styles.active : ''}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Tab;