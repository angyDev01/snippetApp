import { useState } from 'react'
import Acceuil from './components/Acceuil'
import FormRegisterSnippet from './components/FormRegisterSnippet'
import HeaderBar from './components/Header';
import './index.css';


function App() {
  return (
    <>
    <div className='main-container'>
      <HeaderBar />
      <Acceuil/> 
    </div>
    </>
  );
}

export default App;
