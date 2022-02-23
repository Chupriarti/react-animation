import React from 'react';
import './App.css';

function App() {
  const [loaderVisible, setLoaderVisible] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "Hide" : "Show"}</button>
      <div className="wrap">
        { loaderVisible && <div className="circle"/> }
      </div>
    </div>
  );
}

export default App;
