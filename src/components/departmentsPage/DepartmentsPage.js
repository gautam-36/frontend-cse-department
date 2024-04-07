import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';


const DepartmentsPage = () => {
  return (
    <div  style={{marginTop: '100px'}}>
        <h3 class="text-center mt-2"><b>Departments Under CSE Faculty</b></h3>
        <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
        >
        <Tab eventKey="B.TECH" title="B.TECH">
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Computer Science & Engg.</Accordion.Header>
            <Accordion.Body>
                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>First Year</Accordion.Header>
                        <Accordion.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Address</th>
                                <th>CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ashish</td>
                                    <td>9763729348</td>
                                    <td>DC-78 Mayur Vihar, Delhi</td>
                                    <td>7.56</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Gautam</td>
                                    <td>9787592934</td>
                                    <td>AO-78 Uttam Vihar, Delhi</td>
                                    <td>7.96</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Shlok</td>
                                    <td>8733729348</td>
                                    <td>QY-89 Madhur Nagar, Bhiwani</td>
                                    <td>6.56</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Rohan</td>
                                    <td>9709829340</td>
                                    <td>CD-88 Mohan calony, Riwari</td>
                                    <td>7.06</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Second Year</Accordion.Header>
                        <Accordion.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Address</th>
                                <th>CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ashish</td>
                                    <td>9763729348</td>
                                    <td>DC-78 Mayur Vihar, Delhi</td>
                                    <td>7.56</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Gautam</td>
                                    <td>9787592934</td>
                                    <td>AO-78 Uttam Vihar, Delhi</td>
                                    <td>7.96</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Shlok</td>
                                    <td>8733729348</td>
                                    <td>QY-89 Madhur Nagar, Bhiwani</td>
                                    <td>6.56</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Rohan</td>
                                    <td>9709829340</td>
                                    <td>CD-88 Mohan calony, Riwari</td>
                                    <td>7.06</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Third Year</Accordion.Header>
                        <Accordion.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Address</th>
                                <th>CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ashish</td>
                                    <td>9763729348</td>
                                    <td>DC-78 Mayur Vihar, Delhi</td>
                                    <td>7.56</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Gautam</td>
                                    <td>9787592934</td>
                                    <td>AO-78 Uttam Vihar, Delhi</td>
                                    <td>7.96</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Shlok</td>
                                    <td>8733729348</td>
                                    <td>QY-89 Madhur Nagar, Bhiwani</td>
                                    <td>6.56</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Rohan</td>
                                    <td>9709829340</td>
                                    <td>CD-88 Mohan calony, Riwari</td>
                                    <td>7.06</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Final Year</Accordion.Header>
                        <Accordion.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Mobile No</th>
                                <th>Address</th>
                                <th>CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ashish</td>
                                    <td>9763729348</td>
                                    <td>DC-78 Mayur Vihar, Delhi</td>
                                    <td>7.56</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Gautam</td>
                                    <td>9787592934</td>
                                    <td>AO-78 Uttam Vihar, Delhi</td>
                                    <td>7.96</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Shlok</td>
                                    <td>8733729348</td>
                                    <td>QY-89 Madhur Nagar, Bhiwani</td>
                                    <td>6.56</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Rohan</td>
                                    <td>9709829340</td>
                                    <td>CD-88 Mohan calony, Riwari</td>
                                    <td>7.06</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Information Technology</Accordion.Header>
            <Accordion.Body>
            <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>First Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Second Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Third Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Final Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>CSE(Artificial Intelligence & Machine Learning)</Accordion.Header>
            <Accordion.Body>
            <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>First Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Second Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Third Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Final Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Tab>
        <Tab eventKey="M.TECH" title="M.TECH">
        <Accordion>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Computer Science & Engg.</Accordion.Header>
                <Accordion.Body>
                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>First Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Final Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Tab>
        <Tab eventKey="MCA" title="MCA">
        <Accordion>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Master of Computer Applications</Accordion.Header>
                <Accordion.Body>
                <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>First Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Final Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Tab>
        <Tab eventKey="Ph.D" title="Ph.D">
        <Accordion>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Ph.D</Accordion.Header>
                <Accordion.Body>
                <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>First Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Second Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Third Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Fourth Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Accordion>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header>Final Year</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Tab>
    </Tabs>
    </div>
  )
}

export default DepartmentsPage
