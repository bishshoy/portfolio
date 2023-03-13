import React from 'react';
import TimeLineCard from './TimeLineCard';

const Timeline = () => {
  return (
    <div
      className='flex items-center justify-center overflow-hidden'
      style={{ background: '#edf2f7' }}
    >
      <div className='container w-full mx-auto bg-gray-200'>
        <div className='relative py-10 overflow-hidden sm:p-10 wrap'>
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
    title: 'Won MFIRP Project Grant, IIT Delhi',
    description: 'for Topological Analysis of Neural Networks',
    date: 'Jan 2022',
  },
  {
    title: 'Hiroshima University, Japan',
    description: 'Visiting Researcher',
    date: 'June 2018 / 2019',
  },
  {
    title: 'Joined IIT Delhi',
    description: 'pursuing PhD in Deep Learning',
    date: 'Jan 2022',
  },
  {
    title: 'NVIDIA - System Software Engineer',
    description:
      'Developed Camera APIs and low level linux libraries for Tegra SOCs',
    date: 'Jul 2016 - Nov 2016',
  },
  {
    title: 'Masters of Technology - IIT Guwahati',
    description: 'Studied Signal Processing',
    date: 'Jul 2014',
  },
  {
    title: 'GATE Entrance Exam',
    description: 'Ranked 500 - (99.77 %ile) out of 216,367 candidates',
    date: '2014',
  },
  {
    title: 'Bachelors of Technology',
    description:
      'Electronics and Communication Engineering from Heritage Institute of Technology, Kolkata',
    date: '2009 - 2013',
  },
];

export default Timeline;
