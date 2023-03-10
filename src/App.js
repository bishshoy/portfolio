import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';

import * as FaIcons from 'react-icons/fa';

import Card from './components/Card';
import SectionHeader from './components/SectionHeader';
import Skills from './components/Skills';
import Text from './components/Text';
import Header from './components/Header';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div>
      <Header />
      <div className='flex flex-col items-center justify-center p-2 bg-gray-100'>
        <div data-aos='fade-down' data-aos-duration='800'>
          <Card />
        </div>
        <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
          <SectionHeader text='My Background' id='background' />
          <div className='flex flex-row max-w-xl mx-auto mt-12'>
            <Text
              align='center'
              line='I am a PhD student at Indian Institute of Technology Delhi. My research interests are in Deep Learning methods and architectures with applications to Computer Vision. I have submitted my thesis and currently awaiting defense. Previously, I worked at Nvidia Inc. as a System Software Engineer. I did my Masters in Signal Processing from Indian Institute of Technology Guwahati, and my Bachelors in Electronics and Communications Engineering from Heritage Institute of Technology, Kolkata. I am interested in joining the industry and work on tough challenging problems that help make the world a better place.'
            />
          </div>
          <SectionHeader text='My Skills' id='skills' />
          <Skills identifier='set1' />
          <Skills identifier='set2' />
          <Skills identifier='set3' />
          <Skills identifier='set4' />
          <SectionHeader text='Career Timeline' id='timeline' />
          <SectionHeader text='My Projects' id='projects' />
          <div className='container w-full p-6 mx-auto border-2 border-gray-300 group rounded-xl md:max-w-3xl'>
            <a href={'link'}>
              <h1 className='text-xl font-bold text-center'>
                {'title'}
                <FaIcons.FaExternalLinkAlt className='inline align-baseline' />
              </h1>
            </a>
            <hr className='my-4' />
            <Text
              align='justify'
              line='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
