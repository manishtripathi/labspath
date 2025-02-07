import React from 'react';


export const StatsCard = ({ title, years, value, description, gradient, textColor, Icon, className }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md flex items-center justify-between  ${className} ${gradient || 'bg-white'}`}>
      {Icon && <Icon className="text-4xl mr-4" />} {/* Render the icon */} 

      <div className='description-title'>
      <h2 className={`text-lg font-semibold ${textColor || 'text-white-700'}`}>{title} <span className='active-text'>{years}</span></h2>     
      {description && <p className="text-sm">{description}</p>} 
      </div> 
      <div className='price'> <p className={`text-2xl font-bold ${textColor || 'text-white-700'}`}>{value}</p></div>     
    </div>
  );
};

export const StatsCard2 = ({ title, years, value, description, gradient, textColor, Icon, className }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md flex justify-start flex-col ${className} ${gradient || 'bg-white'}`}>
      {Icon && <Icon className="text-4xl mr-4" />} {/* Render the icon */} 
      <div className='price'> <p className={`text-lg font-semibold ${textColor || 'text-white-700'}`}>{value}</p></div>  
      <div className='description-title'>
      <h2 className={`text-sm font-medium ${textColor || 'text-white-700'}`}>{title} <span className='active-text'>{years}</span></h2>     
      {description && <p className="text-sm">{description}</p>} 
      </div>          
    </div>
  );
};

//export default {StatsCard, StatsCard2};