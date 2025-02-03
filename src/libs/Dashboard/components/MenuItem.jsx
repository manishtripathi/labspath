import React from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const MenuItem = ({ title, icon, isActive, toggleMenu, subMenu = [] }) => {
  return (
    <div className="transition-all duration-300">
      <button
        onClick={toggleMenu}
        className={`w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-purple-100 transition-all duration-300 rounded-lg shadow-sm ${
          isActive ? 'bg-purple-200 font-semibold' : ''
        }`}
      >
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>
        <span className="text-gray-500">{isActive ? <FiChevronDown /> : <FiChevronRight />}</span>
      </button>
      {isActive && subMenu.length > 0 && (
        <div className="ml-8 mt-2">
          {subMenu.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md transition-colors duration-200"
              onClick={()=>item.actions()}
            >
              {item?.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;