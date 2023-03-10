import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as TfiIcons from 'react-icons/tfi';

const CardIcon = ({ identifier }) => {
  return (
    <a
      className={`flex flex-col mx-auto w-16 h-24 text-2xl sm:w-20 sm:h-24 sm:text-4xl text-${contents[identifier].color} items-center justify-center rounded-xl hover:bg-gray-300`}
      href={contents[identifier].link}
    >
      {contents[identifier].icon}
      <button className='mt-2 text-sm sm:text-base'>{identifier}</button>
    </a>
  );
};

const contents = {
  LinkedIn: {
    icon: <FaIcons.FaLinkedin />,
    link: 'https://linkedin.com/in/bishshoy',
    color: 'blue-700',
  },
  Scholar: {
    icon: <SiIcons.SiGooglescholar />,
    link: 'https://scholar.google.com/citations?user=xFSjMNsAAAAJ',
    color: 'blue-500',
  },
  Github: {
    icon: <FaIcons.FaGithub />,
    link: 'https://github.com/bishshoy',
    color: 'gray-700',
  },
  Email: {
    icon: <TfiIcons.TfiEmail />,
    link: 'mailto:writetobishshoy@gmail.com',
    color: 'black',
  },
};

export default CardIcon;
