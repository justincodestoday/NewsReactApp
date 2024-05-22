import React from "react";

const ArticlePulseEffect = () => {
  return (
    <div>
      <div className="rounded-t-lg overflow-hidden shadow-lg animate-pulse bg-gray-200">
        <div className="h-64 bg-gray-300"></div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg animate-pulse bg-gray-200 p-4">
        <div className="h-4 bg-gray-300 mb-2"></div>
        <div className="h-4 bg-gray-300 mb-2"></div>
        <div className="h-4 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default ArticlePulseEffect;
