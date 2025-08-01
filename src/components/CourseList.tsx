'use client';

import { useState, useMemo } from 'react';
import { programData } from '@/data/courses';
import CourseTable from './CourseTable';
import { calculateDaysLeft } from '@/utils/dateUtils';

export default function CourseList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('ALL');
  const [selectedProgram, setSelectedProgram] = useState('bcis');

  const currentProgram = programData[selectedProgram];
  const courses = currentProgram.courses;

  const filteredAndSortedCourses = useMemo(() => {
    const filtered = courses.filter(course => {
      const matchesSemester = selectedSemester === 'ALL' || course.semester === selectedSemester;
      
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.semester.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (!matchesSemester || !matchesSearch) return false;
      
      return true;
    });

    filtered.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return filtered;
  }, [searchTerm, selectedSemester, courses]);

  const semesterStats = useMemo(() => {
    const semesterCourses = selectedSemester === 'ALL' 
      ? courses 
      : courses.filter(course => course.semester === selectedSemester);
    const total = semesterCourses.length;
    const upcoming = semesterCourses.filter(course => !calculateDaysLeft(course.date).isPast).length;
    const completed = total - upcoming;
    
    return { total, upcoming, completed };
  }, [selectedSemester, courses]);

  const availableSemesters = useMemo(() => {
    const semesters = [...new Set(courses.map(course => course.semester))];
    return semesters.sort((a, b) => parseInt(a) - parseInt(b));
  }, [courses]);

  const programs = Object.keys(programData);

  return (
    <div className="space-y-6">
      <div className="bg-[#1A82C4] rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Exam Schedule</h1>
        <p className="text-white text-lg mb-2">Track your upcoming board exams with countdown timers</p>
        <p className="text-white text-lg mb-4">Medhavi College Students • Exam Center: {currentProgram.examCenter}</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{semesterStats.total}</div>
            <div className="text-sm text-blue-100">
              {selectedSemester === 'ALL' ? 'Total Exams' : `Total Exams (Semester ${selectedSemester})`}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300">{semesterStats.upcoming}</div>
            <div className="text-sm text-blue-100">Upcoming</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-300">{semesterStats.completed}</div>
            <div className="text-sm text-blue-100">Completed</div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A82C4] rounded-lg p-4">
        <div className="grid grid-cols-3 gap-1">
          {programs.map((programKey) => {
            const program = programData[programKey];
            return (
              <button
                key={programKey}
                onClick={() => setSelectedProgram(programKey)}
                className={`px-4 py-3 rounded-md font-medium transition-colors ${
                  selectedProgram === programKey
                    ? 'bg-white text-[#1A82C4]'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {program.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Semester
            </label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A82C4] focus:border-[#1A82C4] bg-white text-gray-900"
            >
              <option value="ALL">All Semesters</option>
              {availableSemesters.map(semester => (
                <option key={semester} value={semester}>
                  Semester {semester}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              placeholder="Search exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A82C4] focus:border-[#1A82C4] bg-white text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      <CourseTable courses={filteredAndSortedCourses} />

      {filteredAndSortedCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            {selectedSemester === 'ALL' 
              ? 'No exams found matching your search criteria.'
              : `No exams found for Semester ${selectedSemester} matching your criteria.`
            }
          </div>
        </div>
      )}
    </div>
  );
} 