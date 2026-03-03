import React from 'react'

function Outer() {
    let count = 0;
  return function inner() {
    count += 1;
    console.log(count); 
}

  }
  function Executer() {
    const fn=outer();
    fn();
    fn();
    return <div>Check the console for output</div>;
  }

export default Outer