import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Render nothing if the modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          ✖
        </button>

        {/* Modal Header */}
        {title && (
          <div className="mb-4 border-b pb-2 text-lg font-semibold text-gray-800">
            {title}
          </div>
        )}

        {/* Modal Body */}
        <div>{children}</div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
