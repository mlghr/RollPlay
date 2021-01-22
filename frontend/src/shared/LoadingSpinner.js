import React from "react";
import "./LoadingSpinner.css";

/** Loading message used by components that fetch API data. */

function LoadingSpinner() {
  return (
      <div className="loader text-center">
        Loading ...
      </div>
  );
}

export default LoadingSpinner;