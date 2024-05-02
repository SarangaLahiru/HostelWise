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
                Home
            </li>
            <li>
                Home
            </li>
            <li>
                Home
            </li>
            <li>
                Home
            </li>
        </div>
      </div>
      
      <div className='left-bar'/>
    </div>
  );
}
