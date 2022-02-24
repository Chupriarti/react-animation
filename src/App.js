import React from 'react';
import './App.css';
import { Transition } from 'react-transition-group';

function App() {
  const [loaderVisible, setLoaderVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoaderVisible(true), 1000)
    setTimeout(() => setLoaderVisible(false), 5000)
  }, [])

  return (
    <div className="App">
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "Hide" : "Show"}</button>
      <div className="wrap">
        <Transition
          in={loaderVisible}
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          {state => <div className={`circle ${state}`}/>}
        </Transition>
      </div>
    </div>
  );
}

export default App;
