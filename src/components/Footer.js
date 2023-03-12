import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-32 p-2'>
      <p className='text-xs text-gray-600'>
        © 2023 - Built with{' '}
        <a
          href='https://reactjs.org/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500'
        >
          ReactJS
        </a>{' '}
        and{' '}
        <a
          href='https://tailwindcss.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500'
        >
          Tailwind
        </a>
      </p>
      <p className='text-xs text-gray-600'>
        This website is entirely designed by me.
      </p>
    </div>
  );
};

export default Footer;
