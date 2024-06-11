import React, { useState } from 'react';
import "./header.css";


function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <div className="headerContainer">
      <div className="logo">
        <p id="logo">Archivio</p>
      </div>

      <div className="searchBar">
      <span className="search-icon1 material-symbols-outlined">search</span>
        <input
          type='search'
          id="searchInput"
          placeholder="Search here..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='searchButton' ><span class="search-icon2 material-symbols-outlined">send</span></button>
      </div>
    </div>
    </>
  );
}

export default Header;
