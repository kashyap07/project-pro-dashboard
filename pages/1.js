import React, { useState, useEffect, useRef } from "react";

const One = () => {
  const [position, setPosition] = useState({ x: 1, y: 0 });
  let matrix = new Array(3).fill(0);

  return (
    <div className="wrapper flex items-center justify-center h-screen flex-col gap-10">
      <div className="matrix">
        {matrix.map((x, i) => (
          <div key={i} className="block-row">
            {matrix.map((y, j) => (
              <>
                {position.x === i && position.y === j ? (
                  <span className="block current-block" />
                ) : (
                  <span className="block" />
                )}
              </>
            ))}
          </div>
        ))}
      </div>
      <div className="matrix-nav-button-wrapper ">
        <button
          className="matrix-nav-button"
          onClick={() =>
            setPosition({ x: Math.max(position.x - 1, 0), y: position.y })
          }
        >
          Up
        </button>
        <button
          className="matrix-nav-button"
          onClick={() =>
            setPosition({ x: position.x, y: Math.min(position.y + 1, 2) })
          }
        >
          Right
        </button>
        <button
          className="matrix-nav-button"
          onClick={() =>
            setPosition({ x: Math.min(position.x + 1, 2), y: position.y })
          }
        >
          Down
        </button>
        <button
          className="matrix-nav-button"
          onClick={() =>
            setPosition({ x: position.x, y: Math.max(position.y - 1, 0) })
          }
        >
          Left
        </button>
      </div>
    </div>
  );
};

export default One;
