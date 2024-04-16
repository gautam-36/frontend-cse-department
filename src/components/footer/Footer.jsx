import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="section-title">About</h3>
                    <p>
                        The Department of Computer Science and Engineering at Guru Jambheshwar University is dedicated to providing high-quality education and fostering technological innovation.
                    </p>
                </div>
                <div className="footer-section">
                    <h3 className="section-title">Quick Links</h3>
                    <ul>
                        <Link to = "/"> <li>Home</li></Link>
                        <Link to="/about"> <li>About</li></Link>
                        <Link to="/faculty"> <li>Faculty</li></Link>
                        <Link to="/alumni"> <li>Alumni</li></Link>
                        <Link to= "/infrastructure"> <li>Infrastructure</li></Link>
                        <Link to = "/placement"> <li>Placement</li></Link>
                        <Link to = "/departments"> <li>Departments</li></Link>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="section-title">Contact</h3>
                    <p>
                        Department of Computer Science and Engineering<br />
                        Guru Jambheshwar University<br />
                        Hisar, Haryana 125001<br />
                        India
                    </p>
                    <p>Phone: +91 1234 567890</p>
                    <p>Email: cse@gjuraj.ac.in</p>
                </div>
                <div className="footer-section developer-section">
                    <h3 className="section-title">Developed By</h3>
                    <div className="developer-info">
                       
                        <div className="developer-details">
                            <p className="developer-name">Gautam Gupta</p>
                            <p className="developer-role">B.Tech. C.S.E. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Department of Computer Science and Engineering - GJUST. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;