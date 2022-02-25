import React from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';


function App() {
  const [loaderVisible, setLoaderVisible] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "Hide" : "Show"}</button>
      <div className="wrap">
        <CSSTransition
          in={loaderVisible}
          timeout={500}
          classNames="circle"
        >
          <div className='circle'></div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
