import React, { useState } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] =useState("");

  return (
    <>
      <div className='AppContainer'>
        <div className='searchInput_Container'>
          <input type='text' id="searchInput" placeholder="Search here..." onChange={(e)=>{
            setSearchTerm(e.target.value);
          }}></input>
        </div>
        <div className='resultContainer'>
        {
            data 
            .filter((val)=>{
              if(searchTerm==""){
                return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
            .map((val)=>{
              return(
                <div className="item" key={val.id}>
                  <h3>{val.title}</h3>
                  <p>{otherdata}</p>
                </div>

              )
            
            })
          }
        </div>

      </div>
    </>
  )
}

export default App
