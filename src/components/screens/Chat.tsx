import React from 'react';
import { motion } from 'framer-motion';
import { SAMPLE_CHATS } from '../../data';
import { Search } from 'lucide-react';

interface ChatProps {
    onSelectChat: (id: string) => void;
}

const Chat: React.FC<ChatProps> = ({ onSelectChat }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex flex-col h-full"
        >
            <div className="sticky top-0 z-10 py-2 -mx-4 px-4 bg-[#f0f2f5]/80 backdrop-blur-md mb-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search chats or contacts..."
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
                    />
                </div>
            </div>

            <div className="flex-grow space-y-2 overflow-y-auto pt-2">
                {SAMPLE_CHATS.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">No active chats.</div>
                ) : (
                    SAMPLE_CHATS.map((chat, index) => (
                        <motion.button
                            key={chat.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                            onClick={() => onSelectChat(chat.id)}
                            className="flex items-center w-full p-4 text-left bg-white/50 border border-gray-100/50 rounded-2xl hover:shadow-sm transition-all group"
                        >
                            <div className="relative flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl shadow-sm border-2 border-white">
                                    {chat.avatarSeed}
                                </div>
                                {chat.online && (
                                    <span className="absolute bottom-0 right-0 block h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
                                )}
                            </div>
                            <div className="flex-grow min-w-0 ml-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-gray-900 truncate">{chat.name}</h3>
                                    <span className="text-xs text-gray-400">{chat.time}</span>
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-gray-500 truncate w-[85%]">{chat.lastMessage}</p>
                                    {chat.unread > 0 && (
                                        <span className="flex items-center justify-center bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full shadow-sm">
                                            {chat.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.button>
                    )
                    ))}
            </div>
        </motion.div>
    );
};

export default Chat;
