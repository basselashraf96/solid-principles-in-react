import React from 'react';
import './App.css';
import Button from './components/Button/Button.tsx';
import ButtonWithIcon from './components/ButtonWithIcon/ButtonWithIcon.tsx';
import logo from  './logo.svg'
function App() {
  return (
    <div className="App">
     <Button label='iam only button'>{':('}</Button>
     <ButtonWithIcon icon={logo} label='iam button with icon' name={'just icon'}/>
    </div>
  );
}

export default App;
