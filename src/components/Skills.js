import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';
import { Icon } from '@iconify/react';

import SkillsIcon from './SkillsIcon';
import SkillsText from './BulletedList';

import jaxicon from '../images/JAX.png';

const Card = ({ identifier }) => {
  const { icons, texts, lines } = contents[identifier];

  return (
    <div className='flex flex-wrap justify-center max-w-6xl my-2'>
      <div className='flex flex-wrap justify-center w-full max-w-lg my-2 md:w-1/2'>
        {icons.map((icon, index) => (
          <SkillsIcon icon={icon} text={texts[index]} />
        ))}
      </div>
      <div className='flex flex-wrap w-full my-2 mt-8 md:w-1/2'>
        <SkillsText lines={lines} />
      </div>
    </div>
  );
};

const contents = {
  set1: {
    icons: [SiIcons.SiPytorch, SiIcons.SiTensorflow, SiIcons.SiOpencv, jaxicon],
    texts: ['PyTorch', 'TensorFlow', 'OpenCV', 'JAX'],
    lines: [
      '5+ years of PyTorch experience',
      'Implemented numerous deep learning models',
      'Know a little bit of TensorFlowV2 and JAX as well',
    ],
  },
  set2: {
    icons: [
      FaIcons.FaPython,
      SiIcons.SiCplusplus,
      SiIcons.SiWolframmathematica,
      <Icon icon='file-icons:matlab' className='inline-block text-4xl' />,
    ],
    texts: ['Python', 'C / C++', 'Mathematica', 'MATLAB'],
    lines: [
      'Used Python extensively during PhD, 6+ years of experience',
      'Built low-level libraries in C++ at Nvidia',
    ],
  },
  set3: {
    icons: [
      FaIcons.FaRegFileImage,
      SiIcons.SiScikitlearn,
      SiIcons.SiNumpy,
      SiIcons.SiPowershell,
    ],
    texts: ['PIL', 'scikit-learn', 'Numpy', 'bash'],
    lines: [
      'Proficient in a variety of Python libraries',
      'and shell scripting for automation',
    ],
  },
  set4: {
    icons: [
      DiIcons.DiGitBranch,
      FaIcons.FaDocker,
      FaIcons.FaLinux,
      <Icon icon='file-icons:latex' className='inline-block text-4xl' />,
    ],
    texts: ['git', 'Docker', 'Linux', 'LaTeX'],
    lines: [
      'Proficient in git',
      'Have used Docker containers for deployment',
      'Proficient in LaTeX for research writing',
      'Can troubleshoot Linux systems',
      'Built a custom Deep Learning server with 4x RTX 3090 GPUs',
    ],
  },
};

export default Card;
