import React from 'react';
import CardIcon from './CardIcon';

import profile from '../images/IMG_7086.jpg';

const Card = () => {
  return (
    <div className='flex flex-col max-w-screen-md px-6 py-12 mt-10 bg-white shadow-xl sm:px-16 rounded-xl'>
      <img
        className='w-48 mx-auto shadow-xl rounded-xl'
        src={profile}
        alt='profile'
      />
      <div className='mt-5 text-center'>
        <p className='mt-4 text-2xl font-semibold text-gray-900'>
          {'Bishshoy Das'}
        </p>
        <p className='inline-block w-auto pt-10 pb-2 text-base text-gray-600'>
          <a
            className='p-3 mb-2 transition-all duration-100 ease-in bg-gray-200 border border-gray-400 rounded-full hover:text-white hover:bg-gray-800'
            href='https://github.com/bishshoy/bishshoy/raw/main/Resume.pdf'
          >
            <button>DOWNLOAD CV</button>
          </a>
        </p>
        <div className='flex flex-row justify-center mt-10'>
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
