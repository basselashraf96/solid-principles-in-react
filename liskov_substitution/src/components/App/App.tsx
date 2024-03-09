import React from 'react';

import './App.css';
import SubClass from '../SubClass/SubClass.tsx';

function App() {

  const modalContent = <div>  This is shown inside modal</div>
  const modalContent2 = {lol:2}; // this should make an error and typescript is warning you

  
  return (      
    <div>
        <SubClass contentToShow = {modalContent} id={1}/>
        <SubClass contentToShow = {modalContent2}  id={2}/>
    </div>
  );
}

export default App;
