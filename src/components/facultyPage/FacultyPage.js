import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../styles/facultyPageCustomStyle.css"

const FacultyPage = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/faculty')
      .then(response => response.json())
      .then(data => {
        setFacultyData(data);
      })
      .catch(error => console.error('Error fetching faculty data:', error));
  }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <h3 className="text-center mt-2"><b>Computer Science Engineering Faculty</b></h3>
      <p className="mt-4" style={{ textAlign: 'center' }}>The Department of Computer Science and Engineering is a pioneering academic centre for education at undergraduate and postgraduate level. The Department has grown many folds in academics and infrastructure since its inception. The Department has qualified and experienced faculty. Strong research groups exist in the area of Data Mining, Soft Computing, Artificial Intelligence, Machine Learning, Ad-hoc Mobile Networks, Network Security, Software Engineering, and Image Processing.</p>
      <Tabs
        defaultActiveKey="Dean"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="Dean" title="Dean">
          <div style={{ display: 'flex', justifyContent: 'center',  transition:'all 1s ease'}}>
            {facultyData.map(member => {
              if (member.designation === 'Dean') {
                return (
                  <Card className="custom-card" key={member._id} style={{ width: '18rem', textAlign: 'center' }} >
                    <div style={{ textAlign: 'center' }} className="image-container">
                      <Card.Img variant="left" src={member.image ? member.image : "https://tse4.mm.bing.net/th?id=OIP.rQeqEJ4PlccEwEnwub7eEAHaHw&pid=Api&P=0&h=180"} className="custom-image" />
                    </div>
                    <Card.Body className='custom-card-body'>
                      <Card.Title style={{color:'blue'}} className='custom-card-title'>{member.name}</Card.Title>
                      <Card.Text className='custom-card-text'>
                        <p className='custom-designation'>{member.designation}</p>
                        <p className='custom-about'>{member.expertise ? member.expertise.substring(0, 50) : ''}...</p>
                        <p className='custom-publication'>21 publications</p>
                      </Card.Text>
                      <button className='custom-card-btn' href={member.bioData}>View Profile</button>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </Tab>

        <Tab eventKey="Chairperson" title="Chairperson">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {facultyData.map(member => {
              if (member.designation === 'Chairperson') {
                return (
                  <Card className="custom-card" key={member._id} style={{ width: '18rem', textAlign: 'center' }} >
                    <div style={{ textAlign: 'center' }} className="image-container">
                      <Card.Img variant="left" src={member.image ? member.image : "https://tse4.mm.bing.net/th?id=OIP.rQeqEJ4PlccEwEnwub7eEAHaHw&pid=Api&P=0&h=180"} className="custom-image" />
                    </div>
                    <Card.Body className='custom-card-body'>
                      <Card.Title style={{ color: 'blue' }}  className='custom-card-title'>{member.name}</Card.Title>
                      <Card.Text className='custom-card-text'>
                        <p className='custom-designation'>{member.designation}</p>
                        <p className='custom-about'>{member.expertise ? member.expertise.substring(0, 50) : ''}...</p>
                        <p className='custom-publication'>21 publications</p>
                      </Card.Text>
                      <button className='custom-card-btn' href={member.bioData}>View Profile</button>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </Tab>
        <Tab eventKey="Professors" title="Professors">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {facultyData.map(member => {
              if (member.designation === 'Professor') {
                return (
                  <Card className="custom-card" key={member._id} style={{ width: '18rem', textAlign: 'center' }} >
                    <div style={{ textAlign: 'center' }} className="image-container">
                      <Card.Img variant="left" src={member.image} className="custom-image" />
                    </div>
                    <Card.Body className='custom-card-body'>
                      <Card.Title style={{ color: 'blue' }}  className='custom-card-title'>{member.name}</Card.Title>
                      <Card.Text className='custom-card-text'>
                        <p className='custom-designation'>{member.designation}</p>
                        <p className='custom-about'>{member.expertise ? member.expertise.substring(0, 50) : ''}...</p>
                        <p className='custom-publication'>21publications</p>
                      </Card.Text>
                      <button className='custom-card-btn' href={member.bioData}>View Profile</button>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </Tab>
        <Tab eventKey="Associate Professors" title="Associate Professors">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {facultyData.map(member => {
              if (member.designation === 'Associate Professor') {
                return (
                  <Card className="custom-card" key={member._id} style={{ width: '18rem', textAlign: 'center' }} >
                    <div style={{ textAlign: 'center' }} className="image-container">
                      <Card.Img variant="left" src={member.image} className="custom-image" />
                    </div>
                    <Card.Body className='custom-card-body'>
                      <Card.Title style={{ color: 'blue' }}  className='custom-card-title'>{member.name}</Card.Title>
                      <Card.Text className='custom-card-text'>
                        <p className='custom-designation'>{member.designation}</p>
                        <p className='custom-about'>{member.expertise ? member.expertise.substring(0, 50) : ''}...</p>
                        <p className='custom-publication'>21 publications</p>
                      </Card.Text>
                      <button className='custom-card-btn' href={member.bioData}>View Profile</button>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </Tab>

        <Tab eventKey="Assistant Professors" title="Assistant Professors">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {facultyData.map(member => {
              if (member.designation === 'Assistant Professor' && member.facultyType==='Permanent') {
                return (
                  <Card className="custom-card" key={member._id} style={{ width: '18rem', textAlign: 'center' }} >
                    <div style={{ textAlign: 'center' }} className="image-container">
                      <Card.Img variant="left" src={member.image} className="custom-image" />
                    </div>
                    <Card.Body className='custom-card-body'>
                      <Card.Title style={{ color: 'blue' }}  className='custom-card-title'>{member.name}</Card.Title>
                      <Card.Text className='custom-card-text'>
                        <p className='custom-designation'>{member.designation}</p>
                        <p className='custom-about'>{member.expertise ? member.expertise.substring(0, 50) : ''}...</p>
                        <p className='custom-publication'>21 publications</p>
                      </Card.Text>
                      <button className='custom-card-btn' href={member.bioData}>View Profile</button>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </Tab>
        <Tab eventKey="Faculty Members on Contracts" title="Faculty Members on Contracts">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {facultyData.map(member => {
              if (member.designation === 'Assistant Professor' && member.facultyType === 'Contractual') {
                return (
                  <Card className="custom-card" key={member._id} style={{ width: '18rem', textAlign: 'center' }} >
                    <div style={{ textAlign: 'center' }} className="image-container">
                      <Card.Img variant="left" src={member.image} className="custom-image" />
                    </div>
                    <Card.Body className='custom-card-body'>
                      <Card.Title style={{ color: 'blue' }}  className='custom-card-title'>{member.name}</Card.Title>
                      <Card.Text className='custom-card-text'>
                        <p className='custom-designation'>{member.designation}</p>
                        <p className='custom-about'>{member.expertise ? member.expertise.substring(0, 50) : ''}...</p>
                        <p className='custom-publication'>21 publications</p>
                      </Card.Text>
                      <button className='custom-card-btn' href={member.bioData}>View Profile</button>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default FacultyPage;
