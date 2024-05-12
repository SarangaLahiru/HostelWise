
import React from 'react';
import './rooms.css';
import Header from '../components/Header/header';
import hostal from '../assets/hostal.png';
import assigned from '../assets/assigned.png';
import furniture from '../assets/furniture.png';
import beds from '../assets/beds.png';
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
        <span className='secbox4'>Floors</span>
        <span className='sectextfour1'>3</span>
        </div>

        <div className='secboxseven'>
        <span className='secbox4'>Students<span className='space'/>In Hostal<span className='littlespace'/>Outside Hostal</span>
        <span className='sectextsix'>6582<span className='space'/>1569<span className='littlespace1'/>2500</span>
        </div>

        <div className='furniture'>
        <span className='secboxf'>Furniture</span>
        <div className='secboxf1'><span className='secboxf2'>Ceiling Fans<span className='littlespace'></span>45</span></div>
        <div className='secboxf21'><span className='secboxf2'>Center Table<span className='littlespace2'></span>45</span></div>
        <div className='secboxf3'><span className='secboxf2'>Chairs<span className='littlespace3'></span>45</span></div>
        <div className='secboxf4'><span className='secboxf2'>Refrigerator<span className='littlespace4'></span>45</span></div>
        <div className='secboxf5'><span className='secboxf2'>Kettle<span className='littlespace5'></span>45</span></div>
        </div>

        </div>
       
   </div>

</>
  );
}

export default Rooms;
