import React, { useState, useRef } from 'react';

function ClickCounter() {
  const [stateCount, setStateCount] = useState(0); // UI-யை update செய்யும்
  const refCount = useRef(0); // UI-யை update செய்யாத mutable value

  const handleClick = () => {
    setStateCount(stateCount + 1); // triggers re-render
    refCount.current += 1; // does not trigger re-render
    console.log('Ref count:', refCount.current);
  };

  return (
    <div>
      <p>useState Count (UI shows this): {stateCount}</p>
      <p>useRef Count (Only console shows this): {refCount.current}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;
