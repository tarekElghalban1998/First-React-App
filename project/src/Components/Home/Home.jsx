import React from 'react'
import profileImage from './avataaars.svg'
export default function Home() {
  return <>
  <div className='nav d-flex p-3 position-fixed end-0 start-0 text-white justify-content-evenly'>
  <h2 >START REACT</h2>
<ul className='list-unstyled pt-2  w-25 d-flex justify-content-evenly align-content-center '>
  <li>PORTFOLIO</li>
  <li>ABOUT</li>
  <li>CONTACT</li>
</ul>
  </div>
 <div className="header text-white text-center">
  <img  src= {profileImage} alt="" />
 <h1>START REACT</h1>
 <i className="fa-solid fa-star mb-lg-5 "></i>
 <h4 className='pb-lg-5 fw-bolder'>Graphic Artist - Web Designer - Illustrator</h4>
 </div>


  </>
}
