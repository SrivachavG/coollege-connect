import React from 'react';
import { Search, Bell } from 'lucide-react';

interface TopBarProps {
    title: string;
    onSearchClick: () => void;
    onNotificationsClick: () => void;
    unreadCount?: number;
}

const TopBar: React.FC<TopBarProps> = ({ title, onSearchClick, onNotificationsClick, unreadCount = 0 }) => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white border-b border-gray-100 shadow-sm">
            <h1 className="text-xl font-bold text-gray-800 transition-all duration-300">{title}</h1>
            <div className="flex items-center space-x-3">
                <button
                    onClick={onSearchClick}
                    className="p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-100 hover:text-blue-600 focus:outline-none"
                    aria-label="Search"
                >
                    <Search size={22} />
                </button>
                <button
                    onClick={onNotificationsClick}
                    className="relative p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-100 hover:text-blue-600 focus:outline-none"
                    aria-label="Notifications"
                >
                    <Bell size={22} />
                    {unreadCount > 0 && (
                        <span className="absolute top-1.5 right-1.5 block h-3 w-3 rounded-full bg-red-500 border-2 border-white" />
                    )}
                </button>
            </div>
        </header>
    );
};

export default TopBar;
