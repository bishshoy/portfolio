import React from 'react';

import * as BiIcons from 'react-icons/bi';

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
          Published 4 research{' '}
          <a className='text-blue-700 underline' href='#projects'>
            papers
          </a>{' '}
          and 3 more under review
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          Knowledge Diversification in Ensembles of Identical Neural Networks
          <a className='ml-1 text-sm text-gray-800 align-top' href='#paper1'>
            <BiIcons.BiLinkExternal className='inline-block align-text-top' />
          </a>
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          Edge-aware Image Super-resolution using a Generative Adversarial
          Network
          <a className='ml-1 text-sm text-gray-800' href='#paper2'>
            <BiIcons.BiLinkExternal className='inline-block align-text-top' />
          </a>
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          Adaptive CNN Filter Pruning using Global Importance Metric
          <a className='ml-1 text-sm text-gray-800' href='#paper3'>
            <BiIcons.BiLinkExternal className='inline-block align-text-top' />
          </a>
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          Graph-based Depth Estimation in a Monocular Image using Constrained 3D
          Wireframe Models
          <a className='ml-1 text-sm text-gray-800' href='#paper4'>
            <BiIcons.BiLinkExternal className='inline-block align-text-top' />
          </a>
        </div>
        <div className='mt-2 leading-relaxed text-left text-gray-700'>
          <span className='mr-4 text-xs align-text-top'>&#x25CF;</span>
          Projects
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          Characterizing the Evolution of Embedding Space of Neural Networks
          using Algebraic Topology
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          Model agnostic evaluation of transferability of pre-trained deep model
        </div>
        <div className='leading-relaxed text-left text-gray-700'>
          <span className='ml-8 mr-4 text-xs align-text-top'>&#x25CB;</span>
          High Frame Rate Object Detection using Fast Fourier Transform
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
