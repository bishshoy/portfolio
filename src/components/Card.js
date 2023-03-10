import React from 'react';
import CardIcon from './CardIcon';

import profile from '../images/IMG_7086.jpg';

const Card = () => {
  return (
    <div className='flex flex-col max-w-screen-md p-20 mt-10 bg-white shadow-xl rounded-xl'>
      <img
        className='w-48 mx-auto shadow-xl rounded-xl'
        src={profile}
        alt='profile'
      />
      <div className='mt-5 text-center'>
        <p className='mt-4 text-2xl font-semibold text-gray-900'>
          {'Bishshoy Das'}
        </p>
        <p className='inline-block w-auto py-6 text-base text-gray-600 border-b-2'>
          <div>PhD in Deep Learning, IIT Delhi</div>
          <div className='mb-2'>Ex-Nvidia System Software Engineer</div>
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
