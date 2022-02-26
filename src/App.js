import React from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';


function App() {
  const [mode, setMode] = React.useState("out-in")
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className="App">
      <div>
        <label htmlFor="out-in">out-in</label>
        <input id="out-in" value="out-in" name="radio" type="radio" />
        <label htmlFor="in-out">in-out</label>
        <input id="in-out" value="out-in" name="radio" type="radio" />
      </div>
    </div>
  );
}

export default App;
