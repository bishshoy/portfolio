import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Card from './components/Card';
import Summary from './components/Summary';
import Section from './components/Section';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import ProjectsCard from './components/ProjectsCard';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div className='subpixel-antialiased'>
      <Header />
      <div
        className='flex flex-col items-center justify-center p-2'
        style={{ background: '#edf2f7' }}
      >
        <div data-aos='fade-down' data-aos-duration='800'>
          <Card />
        </div>
        <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
          <Section text='Summary' id='background' />
          <Summary />

          <Section text='Skills' id='skills' />
          <Skills identifier='set1' />
          <Skills identifier='set2' />
          <Skills identifier='set3' />
          <Skills identifier='set4' />

          <Section text='Career Timeline' id='timeline' />
          <Timeline />

          <Section text='Projects' id='projects' />
          <ProjectsCard identifier='paper1' />
          <ProjectsCard identifier='paper2' />
          <ProjectsCard identifier='paper3' />
          <ProjectsCard identifier='paper4' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
