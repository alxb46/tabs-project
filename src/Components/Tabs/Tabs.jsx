import React, { useEffect, useState } from 'react';
import styles from './tabs.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Tab from "../Tab/Tab.jsx";

const Tabs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Dashboard', path: '/dashboard', content: 'Dashboard' },
        { label: 'Banking', path: '/banking', content: 'Banking' },
        { label: 'Telefonie', path: '/telefonie', content: 'Telefonie' },
        { label: 'Accounting', path: '/accounting', content: 'Accounting' },
        { label: 'Verkauf', path: '/verkauf', content: 'Verkauf' },
        { label: 'Statistik', path: '/statistik', content: 'Statistik' },
        { label: 'Post Office', path: '/post-office', content: 'Post Office' },
        { label: 'Administration', path: '/administration', content: 'Administration' },
        { label: 'Help', path: '/help', content: 'Help' },
        { label: 'Warenbestand', path: '/warenbestand', content: 'Warenbestand' },
        { label: 'Auswahllisten', path: '/auswahllisten', content: 'Auswahllisten' },
        { label: 'Einkauf', path: '/einkauf', content: 'Einkauf' },
    ];


    useEffect(() => {
        const currentTab = tabs.findIndex(tab => tab.path === location.pathname);
        setActiveTab(currentTab !== -1 ? currentTab : 0);
    }, [location.pathname]);

    const handleTabClick = (path) => {
        navigate(path);
    };

    return (
        <div>
            <div className={styles.tabs}>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        isActive={activeTab === index}
                        onClick={() => handleTabClick(tab.path)}
                    />
                ))}
            </div>
            <div className={styles.content}>
                <p>{tabs[activeTab].content}</p>
            </div>
        </div>
    );
};

export default Tabs;
