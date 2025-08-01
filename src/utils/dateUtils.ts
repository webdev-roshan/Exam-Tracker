import NepaliDate from 'nepali-date-converter';

export interface DateInfo {
  daysLeft: number;
  hoursLeft: number;
  minutesLeft: number;
  secondsLeft: number;
  nepaliDate: string;
  englishDate: string;
  isPast: boolean;
  isCompleted: boolean;
}

export function calculateDaysLeft(targetDate: string): DateInfo {
  const now = new Date();
  const target = new Date(targetDate);
  
  target.setHours(14, 0, 0, 0);
  
  const timeDiff = target.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  const isPast = timeDiff <= 0;
  const isCompleted = isPast;
  
  const totalSeconds = Math.max(0, Math.floor(timeDiff / 1000));
  const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
  const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
  const secondsLeft = totalSeconds % 60;
  
  const nepaliDate = new NepaliDate(target);
  const nepaliDateString = nepaliDate.format('YYYY-MM-DD');
  
  const englishDateString = target.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return {
    daysLeft: Math.abs(daysLeft),
    hoursLeft,
    minutesLeft,
    secondsLeft,
    nepaliDate: nepaliDateString,
    englishDate: englishDateString,
    isPast,
    isCompleted
  };
}

export function getStatusColor(daysLeft: number, isPast: boolean): string {
  if (isPast) return 'text-gray-500';
  if (daysLeft === 0) return 'text-red-600 font-bold';
  if (daysLeft <= 7) return 'text-red-500';
  if (daysLeft <= 14) return 'text-orange-500';
  if (daysLeft <= 30) return 'text-yellow-600';
  return 'text-green-600';
}

export function getStatusText(daysLeft: number, isPast: boolean): string {
  if (isPast) return 'Completed';
  if (daysLeft === 0) return 'Today!';
  if (daysLeft === 1) return 'Tomorrow';
  return `${daysLeft} days left`;
}

export function formatCountdown(hours: number, minutes: number, seconds: number): string {
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
} 