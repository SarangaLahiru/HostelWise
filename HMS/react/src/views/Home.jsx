
import React from 'react';
import './home.css';
import Header from '../components/Header/header';


export default function Home() {
  return (
   <>
   <Header/>
   
      
   <div className='left-bar'>
   <ul className='left-nav'>
        
     <li >
      <span style={{ margin: '20px' }}>Analytics</span>
    </li>
   
    <li >
      <span style={{ margin: '20px' }}>Students</span>
    </li>
    
    <li>
      <span style={{ margin: '20px' }}>Complaints</span>
    </li>
   
    <li>
      <span style={{ margin: '20px' }}>Stock</span>
    </li>

    <li>
      <span style={{ margin: '20px' }}>Users</span>
    </li>
    <li>
      <span style={{ margin: '20px' }}>Meals</span>
    </li>
     </ul>
   </div>
   </>
  );

  
}
