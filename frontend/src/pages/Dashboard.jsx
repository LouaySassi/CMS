import React from 'react';
import "./Dashboard.css";
import Header from '../components/header.jsx';
import searchResult from '../components/searchResult.jsx';


const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className="headerContainer"><Header /></div>
      <div className='contentContainer'>
        <div className='leftSide'>
          <searchResult/>
        </div>
        <div className='rightSide'>
          <fileLoad/>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
