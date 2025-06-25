import React, { use } from 'react';
import { useEffect, useState } from 'react';
import './styles/App.scss'
import titulo from './images/harrypotter.png';
import Search from './components/Search';
import House from './components/House';
import { Routes, Route } from 'react-router';
import CharacterList from './components/CharacterList';





function App() {

  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    //que quiero que hagas

    fetch("https://hp-api.onrender.com/api/characters/")
      .then(response => response.json())
      .then(data => {
        setContactsList(data);
      })
  }, [])

   
  return(
    <>
      <header className="header">
        <img className="tittlehp" src={titulo} alt="Harry Potter Title" />
      </header>

      <Search />
      <House />
      <CharacterList contactsList={contactsList} />


    </>
  )
}


export default App
