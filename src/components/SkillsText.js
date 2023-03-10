import React from 'react';

const SkillsText = ({ lines }) => {
  return (
    <div className='text-base leading-relaxed text-left text-gray-600'>
      {lines.map(line => (
        <div>
          <span className='mr-4' style={{ fontSize: 16 }}>
            &#x25CF;
          </span>
          {line}
        </div>
      ))}
    </div>
  );
};

export default SkillsText;
