import React from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const MenuItem = ({ title, icon, isActive, toggleMenu, subMenu = [] }) => {
  return (
    <div className="transition-all duration-300">
      <button
        onClick={toggleMenu}
        className={`w-full flex justify-between items-center px-4 transition-all duration-300 custom-menu ${
          isActive ? 'font-semibold active' : ''
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
              className="block w-full custom-menu text-left px-4 text-gray-600 transition-colors duration-200"
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