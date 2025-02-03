import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Render nothing if the modal is closed

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 overflow-y-scroll custom-height-popup relative">
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
