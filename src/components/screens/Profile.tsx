import React from 'react';
import { motion } from 'framer-motion';
import { USER_PROFILE } from '../../data';
import { User, Bell, FolderOpen, Settings, ShieldCheck, LogOut, ChevronRight, Award, Flame, Zap } from 'lucide-react';

const Profile: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-4xl mx-auto space-y-8 pb-10"
        >
            {/* Premium Profile Header */}
            <div className="relative pt-16 pb-12 overflow-hidden rounded-[3rem] mesh-gradient-header shadow-2xl shadow-indigo-500/20">
                <div className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-48 h-48 -ml-12 -mb-12 bg-black/10 rounded-full blur-2xl" />

                <div className="relative flex flex-col items-center text-center px-6">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 15, delay: 0.2 }}
                        className="relative"
                    >
                        <img
                            src={`https://placehold.co/128x128/FFFFFF/1F2937?text=SS&font=inter`}
                            alt="User"
                            className="w-32 h-32 rounded-[2.5rem] border-4 border-white/30 backdrop-blur-md shadow-2xl object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-2xl border-4 border-white flex items-center justify-center text-white shadow-lg">
                            <Zap size={18} fill="white" />
                        </div>
                    </motion.div>

                    <h2 className="text-3xl font-black text-white mt-6 leading-tight tracking-tight">{USER_PROFILE.name}</h2>
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                            Student
                        </span>
                        <span className="text-white/80 font-semibold text-sm">at {USER_PROFILE.university}</span>
                    </div>
                    <p className="mt-2 text-white/70 text-sm font-medium">{USER_PROFILE.major}</p>
                </div>
            </div>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Active Courses', value: '8', icon: Award, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Cloud Files', value: '150', icon: FolderOpen, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Study Streak', value: '12', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="glass-card rounded-[2rem] p-6 flex flex-col items-center text-center"
                    >
                        <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                            <stat.icon size={24} />
                        </div>
                        <p className="text-3xl font-black text-slate-800">{stat.value}</p>
                        <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Settings Menu */}
            <div className="glass-card rounded-[2.5rem] overflow-hidden border-slate-100 p-2">
                {[
                    { icon: User, label: 'Edit Profile', color: 'bg-blue-100 text-blue-600' },
                    { icon: Bell, label: 'Notification Preferences', color: 'bg-yellow-100 text-yellow-600' },
                    { icon: FolderOpen, label: 'Storage Management', color: 'bg-indigo-100 text-indigo-600' },
                    { icon: Settings, label: 'System Settings', color: 'bg-slate-100 text-slate-600' },
                    { icon: ShieldCheck, label: 'Privacy & Security', color: 'bg-emerald-100 text-emerald-600' },
                    { icon: LogOut, label: 'Logout Account', color: 'bg-red-100 text-red-600', dangerous: true },
                ].map((item, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ x: 8, backgroundColor: 'rgba(59, 130, 246, 0.03)' }}
                        className="flex items-center w-full px-6 py-5 transition-all rounded-[1.5rem] group"
                    >
                        <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mr-5 shadow-sm transition-transform group-hover:rotate-6`}>
                            <item.icon size={20} />
                        </div>
                        <span className={`font-black text-sm tracking-tight ${item.dangerous ? 'text-red-500' : 'text-slate-700'}`}>{item.label}</span>
                        <div className="ml-auto w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                            <ChevronRight size={16} strokeWidth={3} />
                        </div>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default Profile;
