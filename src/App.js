import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Main from './pages/Main';


function App() {

  const routes = [
    {path: '/', Component: Main},
    {path: '/about', Component: About}
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <div className="div">
          <NavLink to ="/">Main Page</NavLink>
          <NavLink to ="/about">About Page</NavLink>
        </div>
        {routes.map(({path, Component}) => 
          <Route key={path} exact path={path} >
            {({match}) => 
              <Component />
            }
          </Route>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
