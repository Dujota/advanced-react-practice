import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';


// import Portal from './Portal'

// With usePortal hook inside it
import Portal from './PortalWithHooks'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Toggle>
        {({ on, toggle }) => (
          <>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show / Hide</button>
            {on && <Portal>
                      <h1>I am in a portal!!!</h1>
                    </Portal>
            }
          </>
        )}
      </Toggle>

      {/* DOESNT MATTER WHERE YOU PUT IT, IT WILL STILL TRIGGER THE MOUNTING */}
      {/* <Portal>
        <h1>I am in a portal!!!</h1>
      </Portal> */}
    </div>
  );
}

export default App;
