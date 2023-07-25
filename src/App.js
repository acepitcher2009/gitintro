import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h3>Hello</h3>
      <input />
      <h5>{count}</h5>
      <h5>Click Me!</h5>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
}

export default App;
