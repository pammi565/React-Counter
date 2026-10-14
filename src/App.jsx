import React, { useState } from 'react'
import "./App.css";

const App = () => {

  let [counter , setCounter] = useState(15)

  const [darkMode, setDarkMode] = useState(false);

  const addValue = () =>{
    if(counter < 100){
      setCounter(counter + 1);

    }
  }

  const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
};

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>

      <button className="theme-toggle" onClick={toggleDarkMode} > {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'} </button>


      <h1>Chai or React</h1>
      <h2>Counter value : {counter}</h2>
      {counter === 100 && <p>🎉 Maximum limit reached!</p>}

      {counter === 0 && <p>⚠️ Minimum limit reached!</p>}

      <button  
      onClick={addValue}
      disabled={counter === 100}
      >
        Add Value
        </button>
      
      <br />

      <button 
      onClick={removeValue}
      disabled={counter === 0}
      >
        Decrease Value
      </button>
      <p>footer:</p>
    </div>
  )
}

export default App
