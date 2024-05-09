
import React from 'react';
import './rooms.css';
import Header from '../components/Header/header';
import homeanalyse from '../assets/homeanalyse.png';
import complain from '../assets/complain.png';
import meals from '../assets/meals.png';
import users from '../assets/users.png';
import stack from '../assets/stack.png';
import student from '../assets/student.png';
import emergency from '../assets/emergency.png';
import profilegirl from '../assets/profilegirl.png';
import midimg from '../assets/midimg.png';


 function Rooms() {
  return (
   <>
   <Header/>
   
      
   <div className='left-bar'>
   <ul className='left-nav' >
        
     <li >
      
     <img src={homeanalyse} alt="homeanalyse Image"/>
      <span style={{ margin: '20px' }}>Occupancy</span>
      
    </li>
   
    <li>

    <img src={student} alt="student Image"/>
      <span style={{ margin: '20px' }}>Hostels</span>
    </li>
    
    <li>
    <img src={complain} alt="complain Image" />
      <span style={{ margin: '20px' }}>Rooms</span>
    </li>
   
    <li>
    <img src={stack} alt="stack Image"/>
      <span style={{ margin: '20px' }}>Assigned</span>
    </li>

    <li>
    <img src={users} alt="users Image"/>
      <span style={{ margin: '20px' }}>Furniture</span>
    </li>
    
     </ul>
   </div>
        <div className='mid-bar'>
        <div className='tsmall-box'>
        <span style={{ margin: '20px' }}>Occupancy</span>
        <div className='tboxone'>
        <span style={{ margin: '20px' }}>Hostal 1</span>
        </div>
        <div className='tboxtwo'>
        <span style={{ margin: '20px' }}>Hostal 2</span>
        </div>
        <div className='tboxthree'>
        <span style={{ margin: '20px' }}>Hostal 3</span>
        </div>
        </div>
        </div>
        <div className='sec-bar'>
        <div className='sec-box'>
        <span style={{ margin: '20px' }}>Fees Collection</span>
        <div className='secboxone'>
        <span style={{ margin: '20px' }}>Expected</span>
        <span className='sectextone'>$52,00,000</span>
        </div>
        <div className='secboxtwo'>
        <span style={{ margin: '20px' }}>Collected</span>
        <span className='sectexttwo'>$26,00,000</span>
        </div>
        <div className='secboxthree'>
        <span style={{ margin: '20px' }}>Remaining</span>
        <span className='sectextthree'>$15,60,000</span>
        </div>
        <div className='secboxfour'>
        <span style={{ margin: '20px' }}>Overdue</span>
        <span className='sectextfour'>$10,40,000</span>
        </div>
        </div>
        <div className='final-bar'>
        

        <div className='last-box'>
        
        <span style={{ margin: '20px' }}>Complaints</span>
        <div className='color-container'>
        <div class="blue"/>
        <div class="yellow"/>
        </div>
        <div className='lstboxone'>
        <span style={{ margin: '20px' }}>Total</span>
        <span className='lsttextone'>158</span>
        </div>
        <div className='lstboxtwo'>
        <span style={{ margin: '20px' }}>Resolved</span>
        <span className='lsttexttwo'>96</span>
        </div>
        <div className='lstboxthree'>
        <span style={{ margin: '20px' }}>Open</span>
        <span className='lsttextthree'>62</span>
        </div>
        </div>
        </div>
   </div>
   <div className='right-bar'>
  <span className='first-text'>Student Update</span>
  <div className='rgtboxone'>
    <img src={profilegirl} alt="profilegirl Image" className='profile-image' />
    <span className='profile-text'>Sara Leon</span>
  </div>
</div>
    <img src={emergency} alt="emergency Image" className='emergency-image' />
    <span className='dwn-text'>Press only in Case of<br/> Emergency</span>
    <div class="emergency-box">Emergency</div>
</>
  );
}

export default Rooms;
