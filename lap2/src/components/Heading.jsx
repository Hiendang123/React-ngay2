import React from "react";

function Heading() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Music Player Components</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Popular Songs</h2>
        <a href="#" className="text-gray-500">
          See All
        </a>
      </div>
    </div>
  );
}

export default Heading;
