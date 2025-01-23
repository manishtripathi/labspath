import React from 'react';

const StatsCard = ({ title, value, description, gradient, textColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${gradient || 'bg-white'}`}>
      <h2 className={`text-lg font-semibold ${textColor || 'text-gray-700'}`}>{title}</h2>
      <p className={`text-2xl font-bold mt-2 ${textColor || 'text-purple-700'}`}>{value}</p>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
};

export default StatsCard;