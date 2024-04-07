import React from 'react'
import Navbar from '../components/commoncomponents/Navbar';
import FacultyPage from '../components/facultyPage/FacultyPage'

const FacultyScreen = () => {
  return (
    <div style={{overflowX: 'hidden'}}>
        <Navbar />
        <FacultyPage style={{overflowY: 'hidden'}}/>
    </div>
  )
}

export default FacultyScreen
