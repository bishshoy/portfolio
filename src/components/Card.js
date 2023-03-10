import React from 'react';
import CardIcon from './CardIcon';

import profile from '../images/IMG_7086.jpg';

const Card = () => {
  return (
    <div className='flex flex-col max-w-screen-md px-6 pt-10 pb-4 mt-4 bg-white shadow-xl sm:mt-10 sm:pb-12 sm:pt-16 sm:px-16 rounded-xl'>
      <img
        className='w-32 mx-auto shadow-xl sm:w-48 rounded-xl'
        src={profile}
        alt='profile'
      />
      <div className='mt-5 text-center'>
        <p className='mt-1 text-xl font-semibold text-gray-900 sm:mt-4 sm:text-2xl'>
          {'Bishshoy Das'}
        </p>
        <p className='inline-block w-auto mt-5 mb-2 sm:mt-10'>
          <a
            className='px-4 py-2 text-xs font-medium text-gray-600 transition-all duration-100 ease-in bg-gray-200 border border-gray-400 rounded-full hover:text-white sm:p-3 hover:bg-gray-800 sm:font-normal sm:text-base'
            href='https://github.com/bishshoy/bishshoy/raw/main/Resume.pdf'
          >
            DOWNLOAD CV
          </a>
        </p>
        <div className='flex flex-row justify-center mt-2 sm:mt-10'>
          <CardIcon identifier={'LinkedIn'} />
          <CardIcon identifier={'Scholar'} />
          <CardIcon identifier={'Github'} />
          <CardIcon identifier={'Email'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
