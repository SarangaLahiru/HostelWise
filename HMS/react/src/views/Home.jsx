
import React from 'react';
import './home.css';
import Header from '../components/Header/header';
import homeanalyse from '../assets/homeanalyse.png';
import complain from '../assets/complain.png';
import meals from '../assets/meals.png';
import users from '../assets/users.png';
import stack from '../assets/stack.png';
import student from '../assets/student.png';





export default function Home() {
  return (
   <>
   <Header/>
   
      
   <div className='left-bar'>
   <ul className='left-nav' >
        
     <li style={{ display: 'flex', alignItems: 'center' }}>
      
     <img src={homeanalyse} alt="homeanalyse Image" style={{ marginRight: '10px' }} />
      <span style={{ margin: '20px' }}>Analytics</span>
      
    </li>
   
    <li style={{ display: 'flex', alignItems: 'center' }}>

    <img src={student} alt="student Image" style={{ marginRight: '10px' }} />
      <span style={{ margin: '20px' }}>Students</span>
    </li>
    
    <li style={{ display: 'flex', alignItems: 'center' }}>
    <img src={complain} alt="complain Image" style={{ marginRight: '10px' }} />
      <span style={{ margin: '20px' }}>Complaints</span>
    </li>
   
    <li style={{ display: 'flex', alignItems: 'center' }}>
    <img src={stack} alt="stack Image" style={{ marginRight: '10px' }} />
      <span style={{ margin: '20px' }}>Stock</span>
    </li>

    <li style={{ display: 'flex', alignItems: 'center' }}>
    <img src={users} alt="users Image" style={{ marginRight: '10px' }} />
      <span style={{ margin: '20px' }}>Users</span>
    </li>
    <li style={{ display: 'flex', alignItems: 'center' }}>
    <img src={meals} alt="meals Image" style={{ marginRight: '10px' }} />
      <span style={{ margin: '20px' }}>Meals</span>
    </li>
     </ul>
   </div>
   </>
  );

  
}
