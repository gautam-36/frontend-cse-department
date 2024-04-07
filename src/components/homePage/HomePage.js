// import styles from './HomePageStyle.module.css';
import homescreen1 from '../../assets/homescreen1.jpg'
import GJULogo from '../../assets/GJU.png'


function HomePage() {
  return (
    <div style={{overflowY: 'hidden'}}>
      <div style={{position: 'relative', backgroundImage: `url(${homescreen1})`, backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat:"no-repeat", height: '100vh'}}>
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
          <div className="text-center" style={{color: 'white', marginTop: '100px'}}>
            <img className="display-4 mt-4"  style={{width: '400px', height: '200px'}} src={GJULogo}  alt="LOGO" />
            <h1 className="display-4 mt-4">Guru Jambheshwar University of Science and Technology</h1>
              <p className="display-6 mt-4">
                {" "}
                Welcome in Computer Science department 
              <br/>
                (Teaching Block VI)
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;