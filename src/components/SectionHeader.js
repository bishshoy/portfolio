import React from 'react';

const SectionHeader = ({ text, id }) => {
  return (
    <div id={id}>
      <h1 className='mx-8 my-2 mt-20 text-4xl font-extrabold text-center sm:text-left'>
        {text}
      </h1>
    </div>
  );
};

export default SectionHeader;
