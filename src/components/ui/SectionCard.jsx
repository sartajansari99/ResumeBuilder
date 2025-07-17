import React from 'react';

const SectionCard = ({ title, children, onAdd }) => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        {onAdd && (
          <button
            onClick={onAdd}
            className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
          >
            Add
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default SectionCard;