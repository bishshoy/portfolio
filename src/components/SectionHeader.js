import React from 'react';

const SectionHeader = ({ text, id }) => {
  return (
    <div id={id}>
      <h1 className='pt-24 mx-8 text-4xl font-extrabold text-center sm:text-left'>
        {text}
      </h1>
    </div>
  );
};

export default SectionHeader;
