import React from 'react';
import { motion } from 'framer-motion';
import { SAMPLE_RECENT_ACTIVITY } from '../../data';
import { GraduationCap, BookOpen, FileText, MessageSquare, Bell, Zap, Target, ArrowUpRight } from 'lucide-react';

interface DashboardProps {
    onNavigate: (screen: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8 pb-10"
        >
            {/* Welcome Header - Hidden on Desktop since Top Header has title */}
            <div className="lg:hidden mb-6">
                <h2 className="text-3xl font-black text-slate-800">Hello, Sunny!</h2>
                <p className="text-slate-500 font-medium">Ready for another day of learning?</p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[180px]">

                {/* Status Widget - Large */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="md:col-span-2 lg:col-span-2 row-span-2 glass-card rounded-[2.5rem] p-8 mesh-gradient-header text-white flex flex-col justify-between overflow-hidden group"
                >
                    <div className="relative z-10">
                        <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md mb-4 group-hover:scale-110 transition-transform">
                            <Zap size={24} fill="white" />
                        </div>
                        <h3 className="text-3xl font-black mb-2 leading-tight">Your streak is<br />on fire! 🔥</h3>
                        <p className="text-white/80 font-medium">12 days consistently active. Keep pushing toward your goals.</p>
                    </div>

                    <div className="relative z-10 flex items-center space-x-4 mt-6">
                        <button className="px-6 py-3 bg-white text-indigo-600 rounded-2xl font-bold text-sm shadow-xl shadow-indigo-900/20 hover:scale-105 transition-transform active:scale-95 whitespace-nowrap">
                            View Analytics
                        </button>
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm" />
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold">+5</div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Navigate - Colleges */}
                <motion.button
                    whileHover={{ scale: 1.02, translateY: -4 }}
                    onClick={() => onNavigate('colleges')}
                    className="md:col-span-1 lg:col-span-1 glass-card rounded-[2rem] p-6 bg-blue-50/50 flex flex-col items-start justify-between group"
                >
                    <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                        <GraduationCap size={28} />
                    </div>
                    <div>
                        <span className="block text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">Explore</span>
                        <span className="block text-xl font-black text-slate-800">Colleges</span>
                    </div>
                </motion.button>

                {/* Quick Navigate - Courses */}
                <motion.button
                    whileHover={{ scale: 1.02, translateY: -4 }}
                    onClick={() => onNavigate('courses')}
                    className="md:col-span-1 lg:col-span-1 glass-card rounded-[2rem] p-6 bg-emerald-50/50 flex flex-col items-start justify-between group"
                >
                    <div className="bg-emerald-500 text-white p-4 rounded-2xl shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                        <BookOpen size={28} />
                    </div>
                    <div>
                        <span className="block text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">Manage</span>
                        <span className="block text-xl font-black text-slate-800">My Courses</span>
                    </div>
                </motion.button>

                {/* Mini Widget - Next Exam */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="lg:col-span-1 glass-card rounded-[2rem] p-6 bg-amber-50/50 flex flex-col justify-between"
                >
                    <div className="flex items-center space-x-2 text-amber-600">
                        <Target size={18} />
                        <span className="text-xs font-black uppercase tracking-widest">Next Goal</span>
                    </div>
                    <div>
                        <span className="block text-lg font-black text-slate-800">Physics Quiz</span>
                        <span className="text-xs text-slate-500 font-medium">Tomorrow, 10:00 AM</span>
                    </div>
                    <div className="w-full h-1.5 bg-amber-200 rounded-full mt-2 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '75%' }}
                            className="h-full bg-amber-500 rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Recent Activity Section - Span 2 columns on larger screens */}
                <div className="md:col-span-3 lg:col-span-2 row-span-2 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-black text-slate-800 flex items-center">
                            <Bell size={20} className="mr-2 text-blue-600" />
                            Latest Feed
                        </h3>
                        <button className="text-blue-600 text-sm font-bold flex items-center hover:translate-x-1 transition-transform">
                            View All <ArrowUpRight size={16} className="ml-1" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        {SAMPLE_RECENT_ACTIVITY.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-2xl p-4 flex items-center space-x-4 border-slate-100 hover:border-blue-200"
                            >
                                <div className={`p-3 rounded-xl text-white shadow-md ${activity.type === 'pdf' ? 'bg-red-500 shadow-red-500/20' :
                                    activity.type === 'comment' ? 'bg-blue-500 shadow-blue-500/20' :
                                        'bg-orange-500 shadow-orange-500/20'
                                    }`}>
                                    {activity.icon === 'file-text' && <FileText size={18} />}
                                    {activity.icon === 'message-square' && <MessageSquare size={18} />}
                                    {activity.icon === 'megaphone' && <Bell size={18} />}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-bold text-slate-800 text-sm truncate">{activity.title}</p>
                                    <p className="text-[11px] text-slate-500 font-medium truncate">
                                        In <span className="text-blue-600 font-bold">{activity.source}</span>
                                    </p>
                                </div>
                                <span className="text-[10px] text-slate-400 font-bold whitespace-nowrap">{activity.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Dashboard;
