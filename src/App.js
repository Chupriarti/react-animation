import React from 'react';
import './App.css';
import { Transition } from 'react-transition-group';

function App() {
  const [loaderVisible, setLoaderVisible] = React.useState(true);

  return (
    <div className="App">
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "Hide" : "Show"}</button>
      <div className="wrap">
        <Transition
          in={loaderVisible}
          timeout={2000}
        >
          {state => <div className={`circle ${state}`}/>}
        </Transition>
      </div>
    </div>
  );
}

export default App;
