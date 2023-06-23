import { useEffect } from 'react';
import Astros from './assets/Componets/Astros/Astros';
import Main from './assets/Componets/Main/Main';
import NavBar from './assets/Componets/NavBar/NavBar';
import Apod from './assets/Componets/Apod/Apod';
import { Route,Routes } from 'react-router-dom';
import './App.css'
// import NasaImage from './NasaImage';

const isLogged = true;
localStorage.setItem('login', String(isLogged));

const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]

const userData = 
{
  name: "Jesus",  
  age : "23",
}

function App() {

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged]);

  return (
    <>
    <NavBar 
    links = {links}
    isLogged={JSON.parse(localStorage.login)}
    />    
    
    <Routes>
      <Route 
        path='/' 
        element={<Main {...userData}/>}
         />
      <Route 
        path='/astros' 
        element={<Astros/>}
         />    

         <Route 
        path='/apod' 
        element={<Apod/>}
         />    
    </Routes>
    </>

  
  )
}

export default App


