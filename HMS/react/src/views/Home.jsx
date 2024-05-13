
import { Link } from '@mui/icons-material';
import React from 'react';
import complain from '../assets/complain.png';
import emergency from '../assets/emergency.png';
import homeanalyse from '../assets/homeanalyse.png';
import meals from '../assets/meals.png';
import profilegirl from '../assets/profilegirl.png';
import stock from '../assets/stack.png';
import student from '../assets/student.png';
import Header from '../components/Header/header';
import './home.css';


export default function Home() {
    return (
        <>
            <div className=''>

                <Header className=" z-50" />
            </div>


            <div className='left-bar'>
                <ul className='left-nav ' >

                    <li >

                        <div className="list">
                            <img src={homeanalyse} className='-ml-5' alt="homeanalyse Image" />
                            <span style={{ margin: '20px' }}>Analytics</span>
                        </div>

                    </li>

                    <li>

                        <div className="list">
                            <img src={student} className='-ml-5' alt="homeanalyse Image" />
                            <span style={{ margin: '20px' }}>Students</span>
                        </div>
                    </li>

                    <li>
                        <div className="list">
                            <img src={complain} className='-ml-5' alt="homeanalyse Image" />
                            <span style={{ margin: '20px' }}>Complains</span>
                        </div>
                    </li>

                    <li>
                        <div className="list">
                            <img src={stock} className='-ml-5' alt="homeanalyse Image" />
                            <span style={{ margin: '20px' }}>Stock</span>
                        </div>
                    </li>

                    <li>
                        <div className="list">
                            <img src={meals} className='-ml-5' alt="homeanalyse Image" />
                            <span style={{ margin: '20px' }}>Meals</span>
                        </div>
                    </li>
                    <li>
                        <div className="list">
                            <img src={homeanalyse} className='-ml-5' alt="homeanalyse Image" />
                            <span style={{ margin: '20px' }}>Analytics</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className=' mid-bar'>
                <div className='tsmall-box'>
                    <span style={{ margin: '20px' }} className=' text-2xl relative left-4 top-2 cursor-pointer'>Occupancy <Link /> </span>
                    <div className='tboxone'>
                        <span style={{ marginTop: '50px', marginLeft: "30px", position: "relative", top: "10px" }} >Hostal 1 <Link /></span>
                    </div>
                    <div className='tboxtwo'>
                        <span style={{ marginTop: '50px', marginLeft: "30px", position: "relative", top: "10px" }} >Hostal 2 <Link /></span>
                    </div>
                    <div className='tboxthree'>
                        <span style={{ marginTop: '50px', marginLeft: "30px", position: "relative", top: "10px" }} >Hostal 3 <Link /></span>
                    </div>
                </div>
            </div>
            <div className='sec-bar'>
                <div className='sec-box'>
                    <span className="text-2xl" style={{ marginLeft: '20px', marginTop: "10px", position: "relative", left: "15px", top: "20px" }}>Fees Collection <Link /></span>
                    <div className='secboxone'>
                        <span style={{ margin: '20px', position: "relative", top: "10px" }} className=' relative'>Expected</span>
                        <span className='sectextone'>$52,00,000 <Link className=' relative left-8' /></span>
                    </div>
                    <div className='secboxtwo'>
                        <span style={{ margin: '20px', position: "relative", top: "10px" }}>Collected</span>
                        <span className='sectexttwo'>$26,00,000<Link className=' relative left-8' /></span>
                    </div>
                    <div className='secboxthree'>
                        <span style={{ margin: '20px', position: "relative", top: "10px" }}>Remaining</span>
                        <span className='sectextthree'>$15,60,000<Link className=' relative left-8' /></span>
                    </div>
                    <div className='secboxfour'>
                        <span style={{ margin: '20px', position: "relative", top: "10px" }}>Overdue</span>
                        <span className='sectextfour'>$10,40,000<Link className=' relative left-8' /></span>
                    </div>
                </div>
                <div className='final-bar'>


                    <div className='last-box'>

                        <span style={{ margin: '20px', position: "relative", top: "8px", left: "15px" }} className=' text-2xl'>Complaints <Link /> </span>
                        <div className='color-container'>
                            <div class="blue" />
                            <div class="yellow" />
                        </div>
                        <div className='lstboxone'>
                            <span style={{ margin: '20px', position: "relative", top: "5px" }}>Total <Link /></span>
                            <span className='lsttextone mt-2 relative left-5' >158</span>
                        </div>
                        <div className='lstboxtwo'>
                            <span style={{ margin: '20px', position: "relative", top: "5px" }}>Resolved <Link /> </span>
                            <span className='lsttexttwo mt-2 relative left-5'>96</span>
                        </div>
                        <div className='lstboxthree'>
                            <span style={{ margin: '20px', position: "relative", top: "5px" }}>Open <Link /></span>
                            <span className='lsttextthree mt-2 relative left-5'>62</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-bar' id="right-bar">
                <span className='first-text text-xl'>Student Update</span>
                <div className='rgtboxone ' style={{ width: "250px", height: "80px", backgroundColor: "#111111" }} >
                    <img src={profilegirl} alt="profilegirl Image" className='profile-image' />
                    <span className='profile-text text-lg ml-2 relative' style={{ position: "relative", top: "-15px" }}>Sara Leon</span>
                    <span className='mt-10 -ml-20 relative left-1 text-sm text-green-400'>Avaliable</span>
                </div>

            </div >
            <div className=' relative -top-96 -left-4 -mt-60'>
                <img src={emergency} alt="emergency Image" className='emergency-image' />
                <span className='dwn-text'>Press only in Case of<br /> Emergency</span>
                <div class="emergency-box">Emergency</div>
            </div>
        </>
    );
}
