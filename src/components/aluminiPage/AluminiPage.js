import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './AluminiPageStyle.css';

const AluminiPage = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/alumni')
      .then(response => response.json())
      .then(data => {
        setAlumniData(data);
      })
      .catch(error => console.error('Error fetching alumni data:', error));
  }, []);

  return (
    <div style={{ marginTop: '100px', overflowX: 'hidden' }} className="outerBorder">
      <h3 className="text-center mt-2"><b>Computer Science Engineering Alumni</b></h3>
      <p className="mt-4" style={{ textAlign: 'center' }}>Some of our proud alumni of Computer Science and Engineering, who are now excelling in their lives, have made their parents and their Alma mater proud. These alumni have faced and stood steady against all hurdles of life with their zeal to achieve and fulfill their dreams, and today they shine in the outer world</p>
      <div className="innerBorder">
        <Row>
          {alumniData.map((alumni, index) => (
            <Col key={index}>
              <div className="flip-card pop">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={alumni.image} alt="Avatar" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className="flip-card-back">
                    <h5>{alumni.name}</h5>
                    <p>{`Placed at ${alumni.company}`}</p>
                    <p>{alumni.position}</p>
                    <p>{`(${alumni.batchYear} - ${alumni.batchYear + 4}) `}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
          
        </Row>
      </div>
    </div>
  );
}

export default AluminiPage;
