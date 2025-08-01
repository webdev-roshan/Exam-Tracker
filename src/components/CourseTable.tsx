'use client';

import { useState, useEffect } from 'react';
import { Course } from '@/data/courses';
import { calculateDaysLeft, formatCountdown } from '@/utils/dateUtils';

interface CourseTableProps {
  courses: Course[];
}

export default function CourseTable({ courses }: CourseTableProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#1A82C4]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Semester
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Exam Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Countdown
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => {
              const dateInfo = calculateDaysLeft(course.date);

              return (
                <tr key={course.id} className="hover:bg-gray-200 hover:text-white transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {course.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1A82C4] text-white">
                      Semester {course.semester}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="text-md text-[#1A82C4]">{dateInfo.nepaliDate}</div>
                      <div>{dateInfo.englishDate}</div>
                      <div className="text-xs text-gray-500">{course.examTime}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dateInfo.isCompleted ? (
                      <span className="text-sm text-gray-500">-</span>
                    ) : (
                      <div className="text-sm font-mono">
                        <div className="text-lg font-bold text-gray-900">
                          {dateInfo.daysLeft} days
                        </div>
                        <div className="text-xs text-[#1A82C4]">
                          {formatCountdown(dateInfo.hoursLeft, dateInfo.minutesLeft, dateInfo.secondsLeft)}
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {dateInfo.isCompleted ? (
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-sm text-green-600 font-medium">Completed</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${dateInfo.daysLeft <= 7 ? 'bg-red-400' :
                          dateInfo.daysLeft <= 14 ? 'bg-orange-400' :
                            dateInfo.daysLeft <= 30 ? 'bg-yellow-400' : 'bg-green-400'
                          }`}></div>
                        <span className="ml-2 text-sm text-gray-600">Upcoming</span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
} 