import React from 'react';

const SkillsIcon = props => {
  let icon;
  if (typeof props.icon === 'string') {
    icon = (
      <img
        src={props.icon}
        alt={props.text}
        className='inline-block w-12 mt-2 text-4xl'
      />
    );
  } else if (typeof props.icon === 'object') {
    icon = props.icon;
  } else {
    icon = <props.icon className='inline-block text-4xl' />;
  }

  return (
    <div className='flex-none w-40 h-32 p-5 m-4 mx-2 text-center border-2 border-gray-300 rounded-xl'>
      {icon}
      <p className='mt-4 text-xl font-semibold'>{props.text}</p>
    </div>
  );
};

export default SkillsIcon;
