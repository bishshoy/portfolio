import React from 'react';

const TimeLineCard = ({ title, description, date, side }) => {
  let h1mx,
    h1TextDir,
    flexDir,
    cardColor,
    textColor,
    descFontSize,
    descFontColor;
  switch (side) {
    case 'left':
      h1mx = 1;
      h1TextDir = 'left';
      flexDir = 'flex-row-reverse';
      cardColor = 'red-400';
      textColor = 'white';
      descFontSize = 'font-normal md:font-medium';
      descFontColor = 'white';
      break;
    case 'right':
      h1mx = 2;
      h1TextDir = 'right';
      flexDir = '';
      cardColor = 'gray-400';
      textColor = 'gray-800';
      descFontSize = '';
      descFontColor = 'gray-900';
      break;
    default:
      break;
  }

  return (
    <>
      <h1
        className={`mx-${h1mx} mb-2 text-sm md:text-base md:font-bold text-${h1TextDir} text-gray-600`}
      >
        {date}
      </h1>
      <div
        className={`flex ${flexDir} items-center justify-between w-full mb-8`}
      >
        <div className='order-1 w-5/12'></div>
        <div className='z-20 flex items-center order-1 w-5 h-5 rounded-full md:w-8 md:h-8 bg-gradient-to-tl from-black via-gray-900 to-gray-600'></div>
        <div
          className={`order-1 w-5/12 px-6 py-4 bg-${cardColor} rounded-lg shadow-xl`}
        >
          <h3
            className={`mb-3 font-semibold md:text-xl md:font-bold text-${textColor}`}
          >
            {title}
          </h3>
          <p
            className={`text-sm ${descFontSize} leading-snug tracking-wide text-${descFontColor} text-opacity-100`}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default TimeLineCard;
