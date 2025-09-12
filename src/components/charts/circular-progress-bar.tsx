'use client';

interface CircularProgressBarProps {
  percentage: number;
  label: string;
}

export default function CircularProgressBar({
  percentage,
  label,
}: CircularProgressBarProps) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className='flex flex-col items-center justify-center gap-2 p-4 rounded-lg glassmorphism'>
      <div className='relative w-32 h-32'>
        <svg className='w-full h-full' viewBox='0 0 120 120'>
          <circle
            className='text-gray-700'
            strokeWidth='10'
            stroke='currentColor'
            fill='transparent'
            r={radius}
            cx='60'
            cy='60'
          />
          <circle
            className='text-primary transition-all duration-1000 ease-out'
            strokeWidth='10'
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap='round'
            stroke='currentColor'
            fill='transparent'
            r={radius}
            cx='60'
            cy='60'
            transform='rotate(-90 60 60)'
          />
        </svg>
        <span className='absolute inset-0 flex items-center justify-center text-2xl font-bold text-white'>
          {percentage}%
        </span>
      </div>
      <p className='text-sm text-gray-300 font-medium'>{label}</p>
    </div>
  );
}
