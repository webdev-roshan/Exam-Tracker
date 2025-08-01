'use client';

import { Course } from '@/data/courses';
import { calculateDaysLeft, getStatusColor, getStatusText } from '@/utils/dateUtils';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const dateInfo = calculateDaysLeft(course.date);
  const statusColor = getStatusColor(dateInfo.daysLeft, dateInfo.isPast);
  const statusText = getStatusText(dateInfo.daysLeft, dateInfo.isPast);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {course.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                Semester {course.semester}
              </span>
            </div>
          </div>
          <div className={`text-right ${statusColor}`}>
            <div className="text-2xl font-bold">
              {dateInfo.isPast ? '-' : dateInfo.daysLeft}
            </div>
            <div className="text-xs">
              {statusText}
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500 mb-1">English Date</div>
              <div className="font-medium text-gray-900">
                {dateInfo.englishDate}
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Nepali Date</div>
              <div className="font-medium text-gray-900">
                {dateInfo.nepaliDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 