import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as TfiIcons from 'react-icons/tfi';

const CardIcon = ({ identifier }) => {
  let icon, link, color;
  switch (identifier) {
    case 'LinkedIn':
      icon = <FaIcons.FaLinkedin />;
      link = 'linkedin.com/in/bishshoy';
      color = 'blue-700';
      break;
    case 'Scholar':
      icon = <SiIcons.SiGooglescholar />;
      link = 'scholar.google.com/citations?user=xFSjMNsAAAAJ';
      color = 'blue-500';
      break;
    case 'Github':
      icon = <FaIcons.FaGithub />;
      link = 'github.com/bishshoy';
      color = 'gray-700';
      break;
    case 'Email':
      icon = <TfiIcons.TfiEmail />;
      link = 'mailto:writetobishshoy@gmail.com';
      color = 'black';
      break;
  }
  return (
    <div className='flex flex-col items-center mx-auto rounded-full'>
      <a
        className={`p-4 text-4xl text-${color} transition-colors duration-300 rounded-full hover:bg-${color} hover:text-white`}
        href={link}
      >
        {icon}
      </a>
      <a className={`text-${color} text-sm`} href={link}>
        {identifier}
      </a>
    </div>
  );
};

export default CardIcon;
