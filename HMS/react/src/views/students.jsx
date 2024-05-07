import React from 'react';
import './students.css';
import Header from '../components/Header/header';
import student from '../assets/student.png';
import homeanalyse from '../assets/homeanalyse.png';
import complain from '../assets/complain.png';
import meals from '../assets/meals.png';
import users from '../assets/users.png';
import stack from '../assets/stack.png';

function Students() {
  return (
    <>
    <Header/>
    
   <div className='left-bar'>
   <ul className='left-nav' >
        
     <li >
      
     <img src={homeanalyse} alt="homeanalyse Image"/>
      <span style={{ margin: '20px' }}>Analytics</span>
      
    </li>
   
    <li>

    <img src={student} alt="student Image"/>
      <span style={{ margin: '20px' }}>Students</span>
    </li>
    
    <li>
    <img src={complain} alt="complain Image" />
      <span style={{ margin: '20px' }}>Complaints</span>
    </li>
   
    <li>
    <img src={stack} alt="stack Image"/>
      <span style={{ margin: '20px' }}>Stock</span>
    </li>

    <li>
    <img src={users} alt="users Image"/>
      <span style={{ margin: '20px' }}>Users</span>
    </li>
    <li>
    <img src={meals} alt="meals Image"/>
      <span style={{ margin: '20px' }}>Meals</span>
    </li>
     </ul>
   </div>
   <div className='mid-bar'>
        <div className='small-box'>
        <span style={{ margin: '20px' }}>Occupancy</span>
        <div className='boxone'>
        <span style={{ margin: '20px' }}>Hostal 1</span>
        </div>
        <div className='boxtwo'>
        <span style={{ margin: '20px' }}>Hostal 2</span>
        </div>
        <div className='boxthree'>
        <span style={{ margin: '20px' }}>Hostal 3</span>
        </div>
        </div>
        </div>
    </>
  );
}

export default Students;
