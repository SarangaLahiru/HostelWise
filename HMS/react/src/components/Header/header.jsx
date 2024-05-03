import React from 'react';
import './header.css';
import hmsimg from '../../assets/hmsimg.png';
import dash from '../../assets/dash.png';
import rooms from '../../assets/rooms.png';
import attendance from '../../assets/attendance.png';
import maintain from '../../assets/maintain.png';
import account from '../../assets/account.png';
import calendar from '../../assets/calendar.png';
import notification from '../../assets/notification.png';
import profile from '../../assets/profile.png';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <div>
        <div className='image-container'>
        <img src={hmsimg} alt="HMS Image"/>
        <div className='box'>
        <span style={{ marginLeft: '20px' }}></span>
        <ul className="nav-list">
        <li style={{ display: 'flex', alignItems: 'center' }}>
      <img src={dash} alt="dash Image" style={{ marginRight: '10px' }} />
      <span style={{ marginLeft: '20px' }}>Dashboard</span>
    </li>
   
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <img src={rooms} alt="rooms Image" style={{ marginRight: '10px' }} />
      <span style={{ marginLeft: '20px' }}>Rooms</span>
    </li>
    
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <img src={attendance} alt="attendance Image" style={{ marginRight: '10px' }} />
      <span style={{ marginLeft: '20px' }}>Attendance</span>
    </li>
   
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <img src={maintain} alt="maintain Image" style={{ marginRight: '10px' }} />
      <span style={{ marginLeft: '20px' }}>Accounts</span>
    </li>

    <li style={{ display: 'flex', alignItems: 'center' }}>
      <img src={account} alt="account Image" style={{ marginRight: '10px' }} />
      <span style={{ marginLeft: '20px' }}>Maintenance</span>
    </li>
    <span style={{ marginLeft: '80px' }}></span>
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <img src={calendar} alt="calendar Image" className='calendar' />
      
    </li>

    <li style={{ display: 'flex', alignItems: 'center' }}>
      <img src={notification} alt="notification Image" className='notification'/>
      
    </li>

    <li style={{ display: 'flex', alignItems: 'center' }}>
      <img src={profile} alt="profile Image" className='profile'/>
      
    </li>
    </ul>
        </div>
      </div>
     
     
      </div>
    
  );
}
