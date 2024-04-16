import React from 'react'
import Navbar from '../components/commoncomponents/Navbar';
import HomePage from '../components/homePage/HomePage';
import Footer from '../components/footer/Footer';


const HomeScreen = () => {
  return (
    <div style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default HomeScreen
