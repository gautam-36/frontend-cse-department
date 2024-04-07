import React from 'react'
import './PartnerStyle.css'
import brand1 from '../../assets/brand1.jpg'
import brand2 from '../../assets/brand2.jpg'
import brand3 from '../../assets/brand3.jpg'
import brand4 from '../../assets/brand4.jpg'
import brand5 from '../../assets/brand5.jpg'
import brand6 from '../../assets/brand6.jpg'
import brand7 from '../../assets/brand7.jpg'


const Brand = () => {
  return (
    <div className="Marquees">
      <div className='recrutingPartners'>
        <h1>Our Recruiting Partners</h1>
      </div>
      <div className='brand-area Marquee FirstRow'>
        <div className='brand-image'>
          <img src={brand1} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand2} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand3} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand4} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand5} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand6} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand7} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand1} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand2} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand3} className="img-fluid" alt="" />
        </div>
        <div className='brand-image'>
          <img src={brand4} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Brand