import { useState } from 'react'
import './App.css'

function App() {
  // TypeScript: explicitly defining state type
  const [count, setCount] = useState<number>(0);

  // Function with type
  const increment = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React + TypeScript Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
