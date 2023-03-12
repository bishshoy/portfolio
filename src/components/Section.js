import React from 'react';

const Section = ({ text, id }) => {
  return (
    <div className='pt-24' id={id} style={{ scrollMarginTop: '1rem' }}>
      <h1 className='mx-8 text-4xl font-extrabold text-center sm:text-left'>
        {text}
      </h1>
    </div>
  );
};

export default Section;
