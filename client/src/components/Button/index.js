import React from 'react';

const index = ({ text, isLoading }) => {
  return (
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isLoading ? 'Loading...' : text}
      </button>
    </div>
  );
};

export default index;
