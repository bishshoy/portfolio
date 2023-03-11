import React from 'react';

const SectionHeader = ({ text, id }) => {
  return (
    <div id={id}>
      <h1 className='pt-32 mx-8 my-2 text-4xl font-extrabold text-center sm:pt-24 sm:text-left'>
        {text}
      </h1>
    </div>
  );
};

export default SectionHeader;
