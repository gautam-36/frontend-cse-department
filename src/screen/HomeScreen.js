import React from 'react'
import Navbar from '../components/commoncomponents/Navbar';
import HomePage from '../components/homePage/HomePage';


const HomeScreen = () => {
  return (
    <div style={{overflowY: 'hidden', overflowX: 'hidden'}}>
        <Navbar/>
        <HomePage />
    </div>
  )
}

export default HomeScreen
