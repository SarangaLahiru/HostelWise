import { Dashboard } from '@mui/icons-material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import calendar from '../../assets/calendar.png';
import hmsimg from '../../assets/hmsimg.png';
import notification from '../../assets/notification.png';
import profile from '../../assets/profile.png';
import './header.css';

export default function Header() {
    const location = useLocation();
    return (
        <div className='fixed w-full z-50'>
            <div className=''>
                <div className='image-container'>
                    <img src={hmsimg} alt="HMS Image" />
                    <div className='box h-8'>
                        <span style={{ marginLeft: '20px' }}></span>
                        <ul className="nav-list relative top-5">
                            <li style={{ display: 'flex', alignItems: 'center' }} className={location.pathname === '/admin' ? 'active-link' : ''}>
                                <Link to='/admin'><span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}><Dashboard className='m-1' />Dashboard</span></Link>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'center' }} className={location.pathname === '/rooms' ? 'active-link' : ''}>
                                <Link to='/rooms'><span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}><Dashboard className='m-1' />Rooms</span></Link>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'center' }} className={location.pathname === '/studentList' ? 'active-link' : ''}>
                                <Link to='/studentList'><span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}><Dashboard className='m-1' />Students</span></Link>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'center' }} className={location.pathname === '/register' ? 'active-link' : ''}>
                                <Link to='/register'><span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}><Dashboard className='m-1' />Registration</span></Link>
                            </li>

                            <li style={{ display: 'flex', alignItems: 'center' }} className={location.pathname === '/' ? 'active-link' : ''}>
                                <Link><span className=' p-4 cursor-pointer' style={{ marginLeft: '20px' }}><Dashboard className='m-1' />Dashboard</span></Link>
                            </li>

                            <div className="box1 flex ml-20 -mt-8">
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
