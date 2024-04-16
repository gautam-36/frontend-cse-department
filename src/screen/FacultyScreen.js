import React from 'react'
import Navbar from '../components/commoncomponents/Navbar';
import FacultyPage from '../components/facultyPage/FacultyPage'
import Footer from '../components/footer/Footer';

const FacultyScreen = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <FacultyPage style={{ overflowY: 'hidden' }} />
      <Footer />
    </div>
  )
}

export default FacultyScreen
