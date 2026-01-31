import React from 'react';
import { motion } from 'framer-motion';
import { SAMPLE_COLLEGES } from '../../data';
import { MapPin, BookOpen, Users, ChevronRight } from 'lucide-react';

interface CollegesProps {
    onSelectCollege: (id: string) => void;
}

const Colleges: React.FC<CollegesProps> = ({ onSelectCollege }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="space-y-4"
        >
            <div className="flex items-center justify-between py-2">
                <p className="text-sm font-medium text-gray-600">
                    Showing <span className="font-bold text-gray-900">{SAMPLE_COLLEGES.length}</span> colleges
                </p>
            </div>

            <div className="space-y-4">
                {SAMPLE_COLLEGES.map((college, index) => (
                    <motion.button
                        key={college.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => onSelectCollege(college.id)}
                        className="flex items-center w-full p-4 text-left transition-all bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md group"
                    >
                        <img
                            src={`https://placehold.co/64x64/${college.logo}&font=inter`}
                            alt={college.name}
                            className="w-16 h-16 mr-4 border border-gray-100 rounded-xl shadow-sm object-cover"
                        />
                        <div className="flex-grow min-w-0">
                            <h3 className="text-lg font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                                {college.name}
                            </h3>
                            <p className="flex items-center mt-1 text-sm text-gray-500">
                                <MapPin size={14} className="mr-1 text-gray-400" />
                                {college.location}
                            </p>
                            <div className="flex items-center mt-3 space-x-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">
                                    <BookOpen size={10} className="mr-1" />
                                    {college.courses} Courses
                                </span>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700">
                                    <Users size={10} className="mr-1" />
                                    {college.students}+ Students
                                </span>
                            </div>
                        </div>
                        <ChevronRight className="ml-2 text-gray-300 transition-transform group-hover:translate-x-1" size={20} />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default Colleges;
