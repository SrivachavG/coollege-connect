import React from 'react';
import { motion } from 'framer-motion';
import { SAMPLE_COURSES } from '../../data';
import { CATEGORY_COLORS } from '../../constants';
import { MinusCircle, BookOpen, Play } from 'lucide-react';

interface CoursesProps {
    onSelectCourse: (id: string) => void;
}

const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
    const enrolledCourses = SAMPLE_COURSES.filter(c => c.isEnrolled);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <div className="flex items-center justify-between pb-2">
                <h2 className="text-2xl font-black text-slate-800 hidden lg:block">My Learning Path</h2>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm">
                    <BookOpen size={16} className="text-blue-600" />
                    <p className="text-sm font-bold text-slate-700">
                        <span className="text-blue-600">{enrolledCourses.length}</span> Active Courses
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {enrolledCourses.map((course, index) => {
                    const colors = CATEGORY_COLORS[course.category] || CATEGORY_COLORS.Default;

                    return (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card rounded-[2rem] p-6 flex flex-col group cursor-pointer"
                            onClick={() => onSelectCourse(course.id)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                    <BookOpen size={24} />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${colors.bg} ${colors.text}`}>
                                    {course.category}
                                </span>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                                    {course.id}: {course.name}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium mt-1">Instructor: {course.instructor}</p>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mt-6 py-4 border-y border-slate-50">
                                <div className="text-center">
                                    <p className="text-slate-800 font-black text-sm">{course.students}</p>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Peers</p>
                                </div>
                                <div className="text-center border-x border-slate-50">
                                    <p className="text-slate-800 font-black text-sm">{course.files}</p>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Resources</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-slate-800 font-black text-sm">{course.schedule.split(' ')[0]}</p>
                                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Next</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <button
                                    className="flex items-center px-4 py-2 text-xs font-black text-slate-500 hover:text-red-500 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Deregister logic
                                    }}
                                >
                                    <MinusCircle size={14} className="mr-2" /> Deregister
                                </button>
                                <button
                                    className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onSelectCourse(course.id);
                                    }}
                                >
                                    <Play size={12} fill="white" />
                                    <span>Resume</span>
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Courses;
