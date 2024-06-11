import React from 'react'

function searchResult() {
  return (
    <>
     <div className='AppContainer'>
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

export default searchResult