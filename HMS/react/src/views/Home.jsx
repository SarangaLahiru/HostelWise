
import { Link } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import complain from '../assets/complain.png';
import emergency from '../assets/emergency.png';
import homeanalyse from '../assets/homeanalyse.png';
import meals from '../assets/meals.png';
import stock from '../assets/stack.png';
import student from '../assets/student.png';
import axiosClient from '../axiosClient';
import PieChart from '../components/chart';
import PieChart2 from '../components/chart2';
import PieChart3 from '../components/chart3';
import PieChart4 from '../components/chart4';
import './home.css';


export default function Home() {
    const [users, setUsers] = useState([]);
    const [hoste1, setHostel1] = useState(0);
    const [hoste2, setHostel2] = useState(0);
    const [hoste3, setHostel3] = useState(0);
    const [image, setImage] = useState('');
    const location = useLocation();
    const [fees, setFees] = useState(0);

    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = () => {
        axiosClient.get('/users')
            .then(({ data }) => {
                console.log(data.totalFees);
                setFees(data.totalFees)
                setHostel1(data.hostelCounts["1"]);
                setHostel2(data.hostelCounts["2"])
                setHostel3(data.hostelCounts["3"])
                setUsers(data.users)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const hostel1Data = {
        'Count': hoste1,
        'Vacancy': 100 - hoste1,
        // Add more labels and data points as needed
    };
    const hostel2Data = {
        'Count': hoste2,
        'Vacancy': 100 - hoste2,
        // Add more labels and data points as needed
    };
    const hostel3Data = {
        'Count': hoste3,
        'Vacancy': 100 - hoste3,
        // Add more labels and data points as needed
    };
    const moneyData = {
        'Expected': 30000,
        'collected': fees,
        // Add more labels and data points as needed
    };
    const totalCount = hoste1 + hoste2 + hoste3;

    return (
        <>
            <div className=''>

            </div>


            <div className='left-bar'>
                <ul className='left-nav ' >

                    <li >

                        <div className={location.pathname === '/admin' ? 'active-link list' : 'list'} >
                            <img src={homeanalyse} className='-ml-5' alt="homeanalyse Image" />
                            <span style={{ margin: '20px' }}>Analytics</span>
                        </div>

                    </li>

                    <li>

                        <div className={location.pathname === '/studentList' ? 'active-link list' : 'list'}>
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
                        <div className='w-56 ml-8 mt-4'>
                            <PieChart data={hostel1Data} />
                        </div>
                    </div>
                    <div className='tboxtwo'>
                        <span style={{ marginTop: '50px', marginLeft: "30px", position: "relative", top: "10px" }} >Hostal 2 <Link /></span>
                        <div className='w-56 ml-8 mt-4'>
                            <PieChart2 data={hostel2Data} />
                        </div>
                    </div>
                    <div className='tboxthree'>
                        <span style={{ marginTop: '50px', marginLeft: "30px", position: "relative", top: "10px" }} >Hostal 3 <Link /></span>
                        <div className='w-56 ml-8 mt-4'>
                            <PieChart3 data={hostel3Data} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec-bar'>
                <div className='sec-box'>
                    <span className="text-2xl" style={{ marginLeft: '20px', marginTop: "10px", position: "relative", left: "15px", top: "20px" }}>Fees Collection <Link /></span>
                    <div className=' w-56 mt-8 ml-5'>
                        <PieChart4 data={moneyData} />
                    </div>
                    <div className='secboxone'>
                        <span style={{ margin: '20px', position: "relative", top: "10px" }} className=' relative'>Expected</span>
                        <span className='sectextone'>Rs.30,000 <Link className=' relative left-8' /></span>
                    </div>
                    <div className='secboxtwo'>
                        <span style={{ margin: '20px', position: "relative", top: "10px" }}>Collected</span>
                        <span className='sectexttwo'>Rs. {fees}<Link className=' relative left-8' /></span>
                    </div>
                    <div className='secboxthree'>
                        <span style={{ margin: '20px', position: "relative", top: "10px" }}>Remaining</span>
                        <span className='sectextthree'>Rs. {fees}<Link className=' relative left-8' /></span>
                    </div>
                    <div className='secboxfour'>
                        <span style={{ margin: '20px', position: "relative", top: "10px" }}>Overdue</span>
                        <span className='sectextfour'>{30000 - fees}<Link className=' relative left-8' /></span>
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
                <div style={{ display: "flex" }} className=' flex flex-wrap'>

                    {users.map(u => (


                        <div key={u.id}>
                            <div className='rgtboxone m-2' style={{ width: "250px", height: "80px", backgroundColor: "#111111" }} >


                                <img src={u.image_url} alt="profilegirl Image" className='profile-image' />
                                <span className='profile-text text-lg ml-2 relative' style={{ position: "relative", top: "-15px" }}>{u.name}</span>
                                <span className='mt-10 -ml-20 relative left-1 text-sm text-green-400'>Avaliable</span>
                            </div>
                        </div>
                    ))}





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
