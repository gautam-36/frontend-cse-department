import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './AluminiPageStyle.css';

import Card from 'react-bootstrap/Card';

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
    <div style={{  overflowX: 'hidden' }} className="outerBorder">
      <h3 className="text-center mt-2"><b>Computer Science Engineering Alumni</b></h3>
      <p className="mt-4" style={{ textAlign: 'center' }}>Some of our proud alumni of Computer Science and Engineering, who are now excelling in their lives, have made their parents and their Alma mater proud. These alumni have faced and stood steady against all hurdles of life with their zeal to achieve and fulfill their dreams, and today they shine in the outer world</p>
      <div className="innerBorder">
        {/* <Row>
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
                </div>-
              </div>
            </Col>
          ))}
          
        </Row> */}

        <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'center', transition: 'all 1s ease' }}>
          {alumniData.map(member => {
           
              return (
                <Card className="custom-card" key={member._id} style={{ width: '18rem', textAlign: 'center' }} >
                  <div style={{ textAlign: 'center' }} className="image-container">
                    <Card.Img variant="left" src={member.image} className="custom-image" />
                  </div>
                  <Card.Body className='custom-card-body'>
                    <Card.Title style={{ color: 'black' }} className='custom-card-title'>{member.name}</Card.Title>
                    <Card.Text className='custom-card-text'>
                      <p className='custom-designation'>{member.classs} in <span>{member.stream}</span></p>
                      <p className='custom-designation'>{member.batchYear} -{member.batchYear+4} </p>
                      <p className='custom-about'>{member.position} at {member.company}</p>
                      
                    </Card.Text>
                    <button className='custom-card-btn'>View Profile</button>
                  </Card.Body>
                </Card>
              );
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default AluminiPage;
