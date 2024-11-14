import { useState } from 'react'
import './App.css'


// task is to limit this counter from 0 to 20
function App() {
  const [count, setCount] = useState(0)
  function Increase() {
    if (count==20) {
      count=20;
      return
    }
    setCount((count)=>count+1)
    
  }
  
  function Decrease() {
    if (count==0) {
      count=0;
      return
    }
    setCount((count)=>count-1)
    
  }
  return (
    <>
     <h1>This Is Counter Project </h1>
     <h2>Count: {count}</h2>
      <div className="card">
        <button onClick={Increase}>
          Increase 
        </button>
        <br /><br />
        <button onClick={Decrease}>Decrease</button>
      </div>
      
    </>
  )
}



export default App
