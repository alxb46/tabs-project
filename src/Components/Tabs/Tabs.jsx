import React, { useEffect, useState } from 'react';
import styles from './tabs.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Tab from "../Tab/Tab.jsx";

const Tabs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(0);
    const [pinnedTabs, setPinnedTabs] = useState([]);

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

    // Находим активную вкладку на основании пути
    useEffect(() => {
        const currentTab = tabs.findIndex(tab => tab.path === location.pathname);
        if (currentTab !== -1) {
            setActiveTab(currentTab);
        }
    }, [location.pathname]);

    // Закрепление вкладки
    const pinTab = (index) => {
        const tab = tabs[index];
        setPinnedTabs((prev) => {
            if (!prev.some(pinnedTab => pinnedTab.path === tab.path)) {
                return [tab, ...prev];
            }
            return prev;
        });
    };

    // Открепление вкладки
    const unpinTab = (index) => {
        setPinnedTabs((prev) => prev.filter((_, i) => i !== index));
    };

    // Обработчик клика по вкладке
    const handleTabClick = (path, index) => {
        navigate(path);

        // Найдем индекс в отсортированном списке вкладок
        const newActiveTab = tabsToDisplay.findIndex(tab => tab.path === path);
        setActiveTab(newActiveTab);
    };

    // Сортировка вкладок: сначала закрепленные, потом обычные
    const tabsToDisplay = [
        ...pinnedTabs,
        ...tabs.filter(tab => !pinnedTabs.some(pinnedTab => pinnedTab.path === tab.path))
    ];

    // Убедимся, что активная вкладка соответствует текущему состоянию вкладок
    useEffect(() => {
        const currentTab = tabsToDisplay.findIndex(tab => tab.path === location.pathname);
        if (currentTab !== -1) {
            setActiveTab(currentTab);
        }
    }, [tabsToDisplay, location.pathname]);

    return (
        <div>
            <div className={styles.tabs}>
                {tabsToDisplay.map((tab, index) => (
                    <Tab
                        key={tab.path}
                        label={tab.label}
                        isActive={activeTab === index}
                        isPinned={pinnedTabs.some(pinnedTab => pinnedTab.path === tab.path)}
                        onClick={() => handleTabClick(tab.path, index)}
                        onPin={() => pinTab(tabs.findIndex(t => t.path === tab.path))}
                        onUnpin={() => unpinTab(pinnedTabs.findIndex(t => t.path === tab.path))}
                    />
                ))}
            </div>
            <div className={styles.content}>
                <p>{tabsToDisplay[activeTab]?.content}</p>
            </div>
        </div>
    );
};

export default Tabs;
