import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Modal from './Modal'

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

      <Modal/>

      {/* Simple Toggle Example */}
      <Toggle>
        {({ on, toggle }) => (
          <>
            <button onClick={toggle}>Open</button>
            <Modal on={on} toggle={toggle}>
              <h1>Hi there !!!!!</h1>
            </Modal>
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
