import React from 'react'
import Navbar from '../components/commoncomponents/Navbar';
import HomePage from '../components/homePage/HomePage';
import Footer from '../components/footer/Footer';
import Notice from '../components/notice/Notice';


const HomeScreen = () => {
  return (
    <div style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <Navbar />
      <HomePage />
      <div className="notification" style={{ borderBottom:"1px solid gray", backgroundColor: "rgb(43 48 53)", display: "flex", flexDirection:"column" , alignItems:"center", justifyContent:"center"}}>
      <h1 style={{color:"#fff", paddingTop:"1rem"}}>Notifications</h1>
        <Notice />
      </div>
      <Footer />
    </div>
  )
}

export default HomeScreen
