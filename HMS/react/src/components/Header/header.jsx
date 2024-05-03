import React from 'react';
import './header.css';
import hmsimg from '../../assets/hmsimg.png';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <div>
        <div className='image-container'>
        <img src={hmsimg} alt="HMS Image"/>
        <div className='box'>
            <li>
                Dashboard
            </li>
            <li>
                Rooms
            </li>
            <li>
                Attendance
            </li>
            <li>
                Accounts
            </li>
            <li>
                Maintainance
            </li>
        </div>
      </div>
      
      <div className='left-bar'/>
    </div>
  );
}
