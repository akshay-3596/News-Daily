import React, { useEffect, useState } from 'react'

const Navbar = ({setCategory}) => {
  const date =new Date();
  const showTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  
  

  console.log(date)
  return (
    <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>News Daily</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item btn">
          <div className="nav-link" onClick={()=>setCategory('technology')}>Technology </div>
        </li>
        <li className="nav-item btn">
          <div className="nav-link" onClick={()=>setCategory('buisness')}>Buisness</div>
        </li>
        <li className="nav-item btn">
          <div className="nav-link" onClick={()=>setCategory('health')}>Health </div>
        </li>
        <li className="nav-item btn">
          <div className="nav-link" onClick={()=>setCategory('sports')}>Sports </div>
        </li>
        <li className="nav-item btn">
          <div className="nav-link" onClick={()=>setCategory('entertainment')}>Entertainment </div>
        </li>
       
        
      </ul>
    </div>
    <div className=' text-white align-content-center justify-content-end me-3'>
          <span>{date.toDateString()}</span>
          <span className='ms-4'>{showTime}</span>
        </div>
  </div>
</nav>
  )
}

export default Navbar
