import React from 'react';
import { motion } from 'framer-motion';
import { SAMPLE_COURSES } from '../../data';
import { CATEGORY_COLORS } from '../../constants';
import { Users, FileText, Clock, MinusCircle } from 'lucide-react';

interface CoursesProps {
    onSelectCourse: (id: string) => void;
}

const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
    const enrolledCourses = SAMPLE_COURSES.filter(c => c.isEnrolled);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="space-y-4"
        >
            <div className="py-2">
                <p className="text-sm font-medium text-gray-600">
                    You are enrolled in <span className="font-bold text-gray-900">{enrolledCourses.length}</span> courses
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {enrolledCourses.map((course, index) => {
                    const colors = CATEGORY_COLORS[course.category] || CATEGORY_COLORS.Default;

                    return (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.01 }}
                            className="p-5 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer"
                            onClick={() => onSelectCourse(course.id)}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3 className={`text-lg font-bold ${colors.text}`}>{course.id}: {course.name}</h3>
                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${colors.bg} ${colors.text}`}>
                                    {course.category}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Instructor: {course.instructor}</p>

                            <div className="flex flex-wrap items-center justify-between pt-3 text-xs text-gray-500 border-t border-gray-50">
                                <span className="flex items-center"><Users size={14} className="mr-1 opacity-60" /> {course.students} Students</span>
                                <span className="flex items-center"><FileText size={14} className="mr-1 opacity-60" /> {course.files} Files</span>
                                <span className="flex items-center"><Clock size={14} className="mr-1 opacity-60" /> {course.schedule}</span>
                            </div>

                            <div className="flex justify-end mt-4">
                                <button
                                    className="flex items-center px-3 py-1.5 text-xs font-bold text-gray-600 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Deregister logic
                                    }}
                                >
                                    <MinusCircle size={14} className="mr-1.5" /> Deregister
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
