import React from 'react';

const Text = ({ line, align }) => {
  return (
    <div className={`text-base leading-relaxed text-gray-600 text-${align}`}>
      {line}
    </div>
  );
};

export default Text;
