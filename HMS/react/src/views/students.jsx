import React from 'react';
import './students.css';
import Header from '../components/Header/header';
import complain from '../assets/complain.png';
import meals from '../assets/meals.png';
import users from '../assets/users.png';
import stack from '../assets/stack.png';
import profilegirl from '../assets/profilegirl.png';
import stgimage from '../assets/stgimage.png';
import stganalytics from '../assets/stganalytics.png';


function Students() {
  return (
    <>
    <Header/>
    
   <div className='left-bar'>
   <ul className='left-nav' >
        
     <li >
      
     <img src={stganalytics} alt="stganalytics Image"/>
      <span style={{ margin: '20px' }}>Analytics</span>
      
    </li>
   
    <li>

    <img src={stgimage} alt="stgimage Image"/>
      <span style={{ margin: '20px' }}>Students</span>
    </li>
    
    <li>
    <img src={complain} alt="complain Image" />
      <span style={{ margin: '20px' }}>Complaints</span>
    </li>
   
    <li>
    <img src={stack} alt="stack Image"/>
      <span style={{ margin: '20px' }}>Stock</span>
    </li>

    <li>
    <img src={users} alt="users Image"/>
      <span style={{ margin: '20px' }}>Users</span>
    </li>
    <li>
    <img src={meals} alt="meals Image"/>
      <span style={{ margin: '20px' }}>Meals</span>
    </li>
     </ul>
   </div>
   <div className='mid-bar'>
        <div className='small-box'>
        <div className='boxone'>
        <span style={{ margin: '20px' }}>Total Students</span>
        <span className='tex-one'>3569</span>
        </div>
        <div className='boxtwo'>
        <span style={{ margin: '20px' }}>In Hostel</span>
        <span className='tex-two'>1569</span>
        </div>
        <div className='boxthree'>
        <span style={{ margin: '20px' }}>Outside Hostel</span>
        <span className='tex-three'>2500</span>
        </div>
        <div className='boxfour'>
        <span style={{ margin: '20px' }}>Students Assigned</span>
        <span className='tex-four'>2569</span>
        </div>
        <div className='boxfive'>
        <span style={{ margin: '20px' }}>Students Removed</span>
        <span className='tex-five'>1000</span>
        </div>
        <div className='boxsix'>
        <span style={{ margin: '20px' }}>Fees Defaulters</span>
        <span className='tex-six'>150</span>
        <dev className='view-box'><span className='view-text'>View List</span></dev>
        </div>
        </div>
        </div>

        <div className='filter-bar'>
        <div className='top-box'>
       
        <span className='std-text'>Students</span>
        <div className='stdone'>
        <span className='std-one'>Search...</span>
        </div>
        <div className='stdtwo'>
        <span className='std-two'>Filter</span>
        </div>
        <div className='stdthree'>
        <span className='std-three'>John Westwood</span>
        </div>
        </div>
        </div>

        <div className='default-bar'>
        <div className='dtop-box'>
       
        <span className='std-text'>Default Students</span>
        <div className='stdone'>
        <span className='std-one'>Search...</span>
        </div>
        <div className='dstdtwo'>
        <span className='dstd-two'>+Add</span>
        </div>
        <div className='dstdthree'>
        <span className='dstd-three'>John Westwood</span>
        <span className='dstd-four'>Broke 4 Test Tubes in Hostel Mess <br/> Fine: 1200$ &nbsp; &nbsp; &nbsp; &nbsp; 1 Nov 20222</span>
        <div className='remove'>
        <span className='remove-text'>Remove Defaulter</span>
        </div>
        <div className='payment'>
        <span className='payment-text'>Send Payment Link</span>
        </div>
        </div>
        </div>
        </div>
        <div className='remove1'>
        <span className='remove1-text'>Remove Student</span>
        </div>
        <div className='payment1'>
        <span className='payment1-text'>+Add Student</span>
        </div>
        <div className='std1-bar'>
  <span className='first-text'>Student Update</span>
  <div className='rgtboxone'>
    <img src={profilegirl} alt="profilegirl Image" className='profile-image' />
    <span className='profile-text'>Sara Leon</span>
  </div>
</div>
    </>
  );
}

export default Students;
