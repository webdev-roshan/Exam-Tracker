'use client';

import { useState, useEffect } from 'react';
import { Course } from '@/data/courses';
import { calculateDaysLeft, formatCountdown } from '@/utils/dateUtils';

interface CourseTableProps {
  courses: Course[];
}

export default function CourseTable({ courses }: CourseTableProps) {
  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => {
        const dateInfo = calculateDaysLeft(course.date);

        return (
          <div key={course.id} className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1A82C4] text-white">
                      Semester {course.semester}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  {dateInfo.isCompleted ? (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-sm text-green-600 font-medium">Completed</span>
                    </div>
                  ) : (
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${
                        dateInfo.daysLeft <= 7 ? 'text-red-600' :
                        dateInfo.daysLeft <= 14 ? 'text-orange-600' :
                        dateInfo.daysLeft <= 30 ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {dateInfo.daysLeft}
                      </div>
                      <div className="text-xs text-gray-500">days left</div>
                      <div className="text-xs text-[#1A82C4] font-mono mt-1">
                        {formatCountdown(dateInfo.hoursLeft, dateInfo.minutesLeft, dateInfo.secondsLeft)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Date</div>
                    <div className="font-medium text-gray-900 text-base">
                      {dateInfo.englishDate}
                    </div>
                    <div className="text-base text-[#1A82C4]">{dateInfo.nepaliDate}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Time</div>
                    <div className="font-medium text-gray-900 text-base">
                      {course.examTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  // Table layout (commented out)
  /*
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
  */
} 