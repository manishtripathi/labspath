import React from 'react';


const StatsCard = ({ title, value, description, gradient, textColor, Icon }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md flex items-center justify-start ${gradient || 'bg-white'}`}>
      {Icon && <Icon className="text-4xl mr-4" />} {/* Render the icon */} 
      <div>
      <h2 className={`text-lg font-semibold ${textColor || 'text-gray-700'}`}>{title}</h2>
      <p className={`text-2xl font-bold mt-2 ${textColor || 'text-purple-700'}`}>{value}</p>
      {description && <p className="text-sm">{description}</p>} 
      </div>      
    </div>
  );
};

export default StatsCard;