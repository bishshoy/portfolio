import React from 'react';
import TimeLineCard from './TimeLineCard';

const Timeline = () => {
  return (
    <div
      className='flex items-center justify-center overflow-hidden'
      style={{ background: '#edf2f7' }}
    >
      <div className='container w-full mx-auto bg-gray-200'>
        <div className='relative p-10 overflow-hidden wrap'>
          <div
            className='absolute h-full border border-gray-700 border-2-2 border-opacity-20'
            style={{ left: '50%' }}
          ></div>
          {contents.map(info => (
            <TimeLineCard
              title={info.title}
              description={info.description}
              date={info.date}
              side={contents.indexOf(info) % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const contents = [
  {
    title: 'Submitted PhD Thesis',
    description: 'Awaiting defense',
    date: 'Dec 2022',
  },
  {
    title: 'Joined IIT Delhi',
    description: 'Doctoral Candidate',
    date: 'Jan 2022',
  },
  {
    title: 'NVIDIA - System Software Engineer',
    description: 'CameraAPI for Tegra SOCs',
    date: 'Jul 2016 - Nov 2016',
  },
  {
    title: 'Masters - IIT Guwahati',
    description: 'Signal Processing',
    date: 'Jul 2014',
  },
  {
    title: 'GATE Entrance Exam',
    description: 'AIR 500 - (99.77 %ile)',
    date: '2014',
  },
];

export default Timeline;
