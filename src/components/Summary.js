import React from 'react';

const Background = () => {
  return (
    <div className='sm:text-lg'>
      <div className='flex flex-col justify-center max-w-4xl mx-auto mt-10 sm:flex-row'>
        <div className='w-full mx-auto sm:w-1/2'>
          <div className='text-lg font-semibold leading-relaxed text-left text-gray-700 sm:text-2xl'>
            <span className='mr-4 text-sm align-text-top sm:text-lg'>
              &#x25CF;
            </span>
            PhD - IIT Delhi (thesis submitted)
          </div>
          <div className='mt-3 leading-relaxed text-left text-gray-700'>
            <span className='mr-4 text-xs align-text-top'>&#x25CF;</span>
            Masters - IIT Guwahati
          </div>
        </div>
        <div className='w-full mx-auto sm:w-1/2'>
          <div className='mt-3 text-lg font-semibold leading-relaxed text-left text-gray-700 sm:mt-0 sm:text-2xl'>
            <span className='mr-4 text-sm align-text-top sm:text-lg'>
              &#x25CF;
            </span>
            Ex - Nvidia System Software Engineer
          </div>
          <div className='mt-3 leading-relaxed text-left text-gray-700'>
            <span className='mr-4 text-xs align-text-top'>&#x25CF;</span>
            Visiting Researcher - Hiroshima University, Japan
          </div>
        </div>
      </div>
      <div className='flex flex-col max-w-4xl mx-auto mt-12 justify-left'>
        <div className='mt-1 leading-relaxed text-left text-gray-700'>
          <span className='mr-4 text-xs align-text-top'>&#x25CF;</span>
          PhD Thesis: Improvements in Learning Capacities of Convoluational
          Neural Networks
        </div>
        <div className='mt-2 leading-relaxed text-left text-gray-700'>
          <span className='mr-4 text-xs align-text-top'>&#x25CF;</span>
          Published 6 research papers with 3 more under review
        </div>
      </div>
      <div className='flex flex-col max-w-4xl mx-auto mt-12 justify-left'>
        <div className='mt-1 leading-relaxed text-left text-gray-700'>
          <span className='mr-4 text-xs align-text-top'>&#x25CF;</span>
          Interests:
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          Deep Learning
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          Computer Vision
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          AR / VR
        </div>
      </div>
    </div>
  );
};

export default Background;
