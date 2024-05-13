import { Dashboard, Room } from '@mui/icons-material';
import React from 'react';
import calendar from '../../assets/calendar.png';
import hmsimg from '../../assets/hmsimg.png';
import notification from '../../assets/notification.png';
import profile from '../../assets/profile.png';
import './header.css';

export default function Header() {
    return (
        <div className='fixed w-full z-50'>
            <div className='-mt-5'>
                <div className='image-container'>
                    <img src={hmsimg} alt="HMS Image" />
                    <div className='box h-8'>
                        <span style={{ marginLeft: '20px' }}></span>
                        <ul className="nav-list relative top-3">
                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}><Dashboard className='m-1' />Dashboard</span>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}>< Room className='m-1' />Rooms</span>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}>< Room className='m-1' />Attendence</span>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}>< Room className='m-1' />Accounts</span>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}>< Room className='m-1' />Maintains</span>
                            </li>

                            <div className="box1 flex ml-20">
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={calendar} alt="calendar Image" className='calendar' />

                                </li>

                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={notification} alt="notification Image" className='notification' />

                                </li>

                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={profile} alt="profile Image" className='profile' />

                                </li>
                            </div>
                        </ul>
                    </div>
                </div>


            </div>
        </div>

    );
}
