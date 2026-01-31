import React from 'react';
import { motion } from 'framer-motion';
import { SAMPLE_RECENT_ACTIVITY } from '../../data';
import { GraduationCap, BookOpen, FileText, MessageSquare, Bell } from 'lucide-react';

interface DashboardProps {
    onNavigate: (screen: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
        >
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Hello, Sunny!</h2>
                <p className="mt-1 text-lg text-gray-600">Let's make today productive.</p>
            </div>

            <section>
                <h3 className="pb-2 mb-4 text-xl font-semibold text-gray-700 border-b">Quick Access</h3>
                <div className="grid grid-cols-2 gap-4">
                    <motion.button
                        whileHover={{ scale: 1.02, translateY: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate('colleges')}
                        className="flex flex-col items-center p-6 transition-colors border border-blue-100 bg-blue-50 rounded-2xl hover:bg-blue-100 group"
                    >
                        <div className="p-3 mb-3 bg-white rounded-xl shadow-sm text-blue-600 transition-transform group-hover:scale-110">
                            <GraduationCap size={32} />
                        </div>
                        <span className="font-bold text-blue-900">Browse Colleges</span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02, translateY: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate('courses')}
                        className="flex flex-col items-center p-6 transition-colors border border-green-100 bg-green-50 rounded-2xl hover:bg-green-100 group"
                    >
                        <div className="p-3 mb-3 bg-white rounded-xl shadow-sm text-green-600 transition-transform group-hover:scale-110">
                            <BookOpen size={32} />
                        </div>
                        <span className="font-bold text-green-900">My Courses</span>
                    </motion.button>
                </div>
            </section>

            <section>
                <h3 className="pb-2 mb-4 text-xl font-semibold text-gray-700 border-b">Recent Activity</h3>
                <div className="space-y-4">
                    {SAMPLE_RECENT_ACTIVITY.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start p-4 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow"
                        >
                            <div className={`p-3 mr-4 rounded-xl text-white ${activity.type === 'pdf' ? 'bg-red-500' :
                                activity.type === 'comment' ? 'bg-blue-500' :
                                    'bg-purple-500'
                                }`}>
                                {activity.icon === 'file-text' && <FileText size={20} />}
                                {activity.icon === 'message-square' && <MessageSquare size={20} />}
                                {activity.icon === 'megaphone' && <Bell size={20} />}
                            </div>
                            <div className="flex-grow">
                                <p className="font-semibold text-gray-800">{activity.title}</p>
                                <p className="text-sm text-gray-600">
                                    In <span className="font-bold text-blue-600">{activity.source}</span>
                                    {activity.author && ` by ${activity.author}`}
                                    {activity.details && `: ${activity.details}`}
                                </p>
                                <p className="mt-1 text-xs text-gray-400">{activity.time}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Dashboard;
