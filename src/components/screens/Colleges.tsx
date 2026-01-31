import React from 'react';
import { motion } from 'framer-motion';
import { SAMPLE_COLLEGES } from '../../data';
import { MapPin, ChevronRight, Star } from 'lucide-react';

interface CollegesProps {
    onSelectCollege: (id: string) => void;
}

const Colleges: React.FC<CollegesProps> = ({ onSelectCollege }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="space-y-6"
        >
            <div className="flex items-center justify-between pb-2">
                <h2 className="text-2xl font-black text-slate-800 hidden lg:block">Discover Excellence</h2>
                <p className="text-sm font-bold text-slate-500">
                    <span className="text-blue-600">{SAMPLE_COLLEGES.length}</span> Institution found
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SAMPLE_COLLEGES.map((college, index) => (
                    <motion.div
                        key={college.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -8 }}
                        className="glass-card rounded-[2rem] overflow-hidden flex flex-col group cursor-pointer"
                        onClick={() => onSelectCollege(college.id)}
                    >
                        {/* College Cover/Header */}
                        <div className="h-32 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
                                <Star size={18} fill="white" />
                            </div>
                            <div className="absolute -bottom-10 left-6">
                                <img
                                    src={`https://placehold.co/80x80/${college.logo}&font=inter`}
                                    alt={college.name}
                                    className="w-20 h-20 rounded-[1.5rem] border-4 border-white shadow-xl object-cover bg-white"
                                />
                            </div>
                        </div>

                        <div className="p-6 pt-12 flex-grow flex flex-col">
                            <div className="flex-grow">
                                <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                                    {college.name}
                                </h3>
                                <p className="flex items-center mt-2 text-sm text-slate-500 font-medium">
                                    <MapPin size={14} className="mr-1.5 text-blue-500" />
                                    {college.location}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="flex flex-col">
                                        <span className="text-slate-800 font-black text-sm">{college.courses}</span>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Courses</span>
                                    </div>
                                    <div className="w-px h-6 bg-slate-100" />
                                    <div className="flex flex-col">
                                        <span className="text-slate-800 font-black text-sm">{college.students}+</span>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Students</span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Colleges;
