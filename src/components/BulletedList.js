import React from 'react';

const BulletedList = ({ lines }) => {
  return (
    <div className='text-base leading-relaxed text-left text-gray-600'>
      {lines.map(line => (
        <div>
          <span className='mr-4 text-xs align-text-top'>&#x25CF;</span>
          {line}
        </div>
      ))}
    </div>
  );
};

export default BulletedList;
