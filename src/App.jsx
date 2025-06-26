import React, { use } from 'react';
import { useEffect, useState } from 'react';
import './styles/App.scss'

import Search from './components/Search';
import House from './components/House';
import { Routes, Route } from 'react-router';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Header from './components/Header';





function App() {

  const [contactsList, setContactsList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [house, setHouse] = useState("");

useEffect(() => {
  fetch("https://hp-api.onrender.com/api/characters/")
    .then(response => response.json())
    .then(data => {
      
      const dataCleanHouses = data.map(item => ({
        ...item,
        house: item.house && item.house.trim() !== "" ? item.house : "Sin casa"
      }));

      setContactsList(dataCleanHouses);
    });
}, []);

const houses = [...new Set(contactsList.map(item => item.house))].sort();
  console.log(houses);

 const filteredList = contactsList
    .filter(
      item => item.name && item.name.toLowerCase().includes(searchName.toLowerCase()))
      .filter(
      item =>  house === "" || item.house === house)
   
  return(
    <>
      <Header />
      
      <Routes>
          <Route index element={
            <>
              <Search psearchName={searchName} psetSearchName={setSearchName} />
              <House phouse={house} psetHouse={setHouse} phouses={houses} />
              <CharacterList pfilteredList={filteredList} psearchName={searchName} />
            </>
        }/>
        <Route path="/character/:id" element={<CharacterDetail pfilteredList={filteredList} />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      
      </Routes>

    </>
  )
}


export default App
