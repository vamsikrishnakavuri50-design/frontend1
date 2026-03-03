import React from 'react'
import { useState } from 'react'

function StaleState() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setTimeout(() => {
    setCount(prevCount => prevCount + 1); 
  }, 3000);
   console.log(count);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
}

export default StaleState