import { useState } from 'react'
import Acceuil from './pages/Acceuil'
import FormRegisterSnippet from './pages/FormRegisterSnippet'
import HeaderBar from './components/Header';
import './index.css';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <Toaster />
    <div className='main-container'>
      <HeaderBar />
      <Acceuil/> 
    </div>
    </>
  );
}

export default App;
