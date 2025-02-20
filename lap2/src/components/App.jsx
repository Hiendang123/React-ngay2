import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Heading />
      <div className="space-y-4">
        <List />
      </div>
    </div>
  );
}

export default App;
