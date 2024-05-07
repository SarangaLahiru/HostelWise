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
       
        <div className='boxone'>
        <span style={{ margin: '20px' }}>Total Students</span>
        <span className='tex-one'>3569</span>
        </div>
        <div className='boxtwo'>
        <span style={{ margin: '20px' }}>In Hostel</span>
        <span className='tex-two'>1569</span>
        </div>
        <div className='boxthree'>
        <span style={{ margin: '20px' }}>Outside Hostel</span>
        <span className='tex-three'>2500</span>
        </div>
        <div className='boxfour'>
        <span style={{ margin: '20px' }}>Students Assigned</span>
        <span className='tex-four'>2569</span>
        </div>
        <div className='boxfive'>
        <span style={{ margin: '20px' }}>Students Removed</span>
        <span className='tex-five'>1000</span>
        </div>
        <div className='boxsix'>
        <span style={{ margin: '20px' }}>Fees Defaulters</span>
        <span className='tex-six'>150</span>
        <dev className='view-box'><span className='view-text'>View List</span></dev>
        </div>
        </div>
        </div>
    </>
  );
}

export default Students;
