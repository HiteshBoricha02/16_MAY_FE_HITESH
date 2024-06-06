import React from 'react';
import logo from '../../src/images/logo.png';

function HeaderApp() {
  return (
    <>
      <header>
        <div className='container d-flex justify-content-between main-container'>
          <div className='d-flex brand-logo'>
            <div className='col-md-4 col-4 d-flex'>
              <div>
                <img src={logo} alt="brandlogo" className='img-fluid w-75' />
              </div>
              <div>
                <h1 className="m-0 me-4 text-success">Nest</h1>
                <p className="bottomtext">Fruit & Vegetables</p>
              </div>
            </div>
            <div className='col-md-8 col-8 mt-3 search'>
              <div class="input-group mb-3 border border-1 rounded-2">
                <select className='me-3'>
                  <option>All Category</option>
                  <option>Snacks</option>
                  <option>Vegetables</option>
                  <option>Strawberry</option>
                  <option>Coffee & Tea</option>
                  <option>Cake & milk</option>
                  <option>organic Kivi</option>
                </select>
                <input type="text" class="form-control border-0" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                <span class="input-group-text bg-transparent border-0">
                  <i class="fa fa-search "></i>
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-5  col-12 mt-3 heading-inner' align="end">
            <select className='mt-2 ms-3 me-3 '>
              <option>Your Location</option>
              <option>Junagadh</option>
              <option>Rajkot</option>
              <option>Ahmedabad</option>
              <option>Surat</option>
              <option>Vadodara</option>
              <option>Jamnagar</option>
            </select>
            <a className='addit position-relative'>
              <i className="fa fa-refresh hicon ms-1 "></i>
              <span className='icontop text-white bg-success position-absolute top-0 translate-middle'>1</span>  Compare  </a>
            <a className='addit position-relative me-2'>
              <i className="fa fa-heart-o hicon ms-1 me-1"></i>
              <span className='icontop text-white bg-success translate-middle position-absolute top-0 translate-middle '>3</span>Wishlist</a>
            <a className='addit position-relative'>
              <i className="fa fa-shopping-cart hicon ms-1 me-1"></i>
              <span className='icontop text-white bg-success translate-middle position-absolute top-0 translate-middle '>7</span> Cart </a>
            <a className='addit'>
              <i className="fa fa-user hicon ms-1 me-1"></i>
              Account
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderApp;