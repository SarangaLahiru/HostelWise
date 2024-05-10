
import React from 'react';
import './rooms.css';
import Header from '../components/Header/header';
import hostal from '../assets/hostal.png';
import assigned from '../assets/assigned.png';
import furniture from '../assets/furniture.png';
import users from '../assets/users.png';
import stack from '../assets/stack.png';
import beds from '../assets/beds.png';
import emergency from '../assets/emergency.png';
import profilegirl from '../assets/profilegirl.png';
import occ from '../assets/occ.png';
import pinkbed from '../assets/pinkbed.png';
import tissue from '../assets/tissue.png';
import cooker from '../assets/cooker.png';


 function Rooms() {
  return (
   <>
   <Header/>
   
      
   <div className='left-bar'>
   <ul className='left-nav' >
        
     <li >
      
     <img src={occ} alt="Occupancy Image"/>
      <span style={{ margin: '20px' }}>Occupancy</span>
      
    </li>
   
    <li>

    <img src={hostal} alt="hostal Image"/>
      <span style={{ margin: '20px' }}>Hostels</span>
    </li>
    
    <li>
    <img src={beds} alt="beds Image" />
      <span style={{ margin: '20px' }}>Rooms</span>
    </li>
   
    <li>
    <img src={assigned} alt="assigned Image"/>
      <span style={{ margin: '20px' }}>Assigned</span>
    </li>

    <li>
    <img src={furniture} alt="furniture Image"/>
      <span style={{ margin: '20px' }}>Furniture</span>
    </li>
    
     </ul>

   </div>

   <div className='stdone1'>
        <span className='std-one1'>Search...</span>
        </div>

        <div className='sec-bar1'>
        <div className='sec-box1'>
        <span style={{ margin: '20px' }}>Hostal 1</span>
        <div className='secboxone1'>
          <img src={pinkbed} alt="Bed Image" className='pinkbed'/>
        <span className='sectextone1'>458</span>
        </div>
        <div className='secboxtwo1'>
        <img src={tissue} alt="Tissue Image" className='tissue'/>
        <span className='sectexttwo1'>5</span>
        </div>
        <div className='secboxthree1'>
        <img src={cooker} alt="Cooker Image" className='cooker'/>
        <span className='sectextthree1'>15</span>
        </div>
        <div className='secboxfour1'>
        <span className='secbox4'>Total Rooms</span>
        <span className='sectextfour1'>458</span>
        </div>
        <div className='secboxfive1'>
        <span className='secbox4'>Occupied</span>
        <span className='sectextfive1'>58</span>
        </div>
        <div className='secboxsix'>
        <span className='secbox5'>Floors</span>
        <span className='sectextsix'>3</span>
        </div>

        <div className='secboxseven'>
        <span className='secbox4'>Students<span className='space'/></span>
        <span className='sectextsix'>3</span>
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
