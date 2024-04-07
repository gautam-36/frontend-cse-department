import React from 'react';
import './infrastructureStyle.css';
import galleryImage1 from '../../assets/lab1.jpeg';
import galleryImage2 from '../../assets/lab2.jpeg';
import galleryImage3 from '../../assets/lab3.jpeg';
import galleryImage4 from '../../assets/lab4.jpeg';
import galleryImage5 from '../../assets/room1.jpeg';
import galleryImage6 from '../../assets/room2.jpeg';
// import galleryImage7 from '../../assets/room3.jpeg';

const InfrastructurePage = () => {
  return (
    <div>
      <h3 class="text-center" style={{marginTop: '100px'}}><b>Infrastructure Gallery</b></h3>
        <div class="gallery-image">
          <div class="img-box">
          <img src={galleryImage1} alt="galleryImage" width="150px" height="100px"  />
            <div class="transparent-box">
              <div class="caption">
                <p>CSE Department</p>
                <p class="opacity-low">LAB 1</p>
              </div>
            </div> 
          </div>
          <div class="img-box">
          <img src={galleryImage2} alt="galleryImage" width="150px" height="100px"  />
            <div class="transparent-box">
              <div class="caption">
                <p>CSE Department</p>
                <p class="opacity-low">LAB 2</p>
              </div>
            </div>
          </div>
          <div class="img-box">
          <img src={galleryImage3} alt="galleryImage" width="150px" height="100px"  />
            <div class="transparent-box">
              <div class="caption">
                <p>CSE Department</p>
                <p class="opacity-low">LAB 3</p>
              </div>
            </div>
          </div>
          <div class="img-box">
          <img src={galleryImage4} alt="galleryImage" width="150px" height="100px"  />
            <div class="transparent-box">
              <div class="caption">
                <p>CSE Department</p>
                <p class="opacity-low">LAB 4</p>
              </div>
            </div> 
          </div>
          <div class="img-box">
          <img src={galleryImage5} alt="galleryImage" width="150px" height="100px"  />
            <div class="transparent-box">
              <div class="caption">
                <p>CSE Department</p>
                <p class="opacity-low">LAB 5</p>
              </div>
            </div> 
          </div>
          <div class="img-box">
          <img src={galleryImage6} alt="galleryImage" width="150px" height="100px"  />
            <div class="transparent-box">
              <div class="caption">
                <p>CSE Department</p>
                <p class="opacity-low">LAB 6</p>
              </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default InfrastructurePage
