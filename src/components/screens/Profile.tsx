import React from 'react';
import { motion } from 'framer-motion';
import { USER_PROFILE } from '../../data';
import { User, Bell, FolderOpen, Settings, ShieldCheck, LogOut, ChevronRight } from 'lucide-react';

const Profile: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="space-y-6"
        >
            <div className="relative pt-12 pb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 -ml-6 -mb-6 bg-black/10 rounded-full blur-xl" />

                <div className="relative text-center">
                    <motion.img
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 12 }}
                        src={`https://placehold.co/100x100/FFFFFF/1F2937?text=SS&font=inter`}
                        alt="User"
                        className="w-24 h-24 mx-auto mb-4 border-4 border-white rounded-full shadow-2xl"
                    />
                    <h2 className="text-2xl font-bold text-white leading-tight">{USER_PROFILE.name}</h2>
                    <p className="text-white/80 font-medium">Student at {USER_PROFILE.university}</p>
                    <p className="mt-1 text-xs text-white/70">{USER_PROFILE.major}</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 p-5 bg-white shadow-sm border border-gray-100 rounded-2xl text-center">
                <div>
                    <p className="text-2xl font-bold text-blue-600">8</p>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Courses</p>
                </div>
                <div className="border-x border-gray-50">
                    <p className="text-2xl font-bold text-green-600">150</p>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Files</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-purple-600">88%</p>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Attend.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl">
                {[
                    { icon: User, label: 'Edit Profile', color: 'text-blue-500' },
                    { icon: Bell, label: 'Notifications', color: 'text-yellow-500' },
                    { icon: FolderOpen, label: 'My Files', color: 'text-indigo-500' },
                    { icon: Settings, label: 'Account Settings', color: 'text-gray-500' },
                    { icon: ShieldCheck, label: 'Privacy & Security', color: 'text-green-500' },
                    { icon: LogOut, label: 'Logout', color: 'text-red-500', dangerous: true },
                ].map((item, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ x: 5, backgroundColor: 'rgba(0,0,0,0.01)' }}
                        className={`flex items-center w-full px-5 py-4 transition-colors border-b border-gray-50 last:border-0 ${item.dangerous ? 'hover:bg-red-50' : 'hover:bg-gray-50'}`}
                    >
                        <item.icon className={`w-6 mr-4 ${item.color}`} size={20} />
                        <span className={`font-medium ${item.dangerous ? 'text-red-600' : 'text-gray-700'}`}>{item.label}</span>
                        <ChevronRight className="ml-auto text-gray-300" size={18} />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default Profile;
