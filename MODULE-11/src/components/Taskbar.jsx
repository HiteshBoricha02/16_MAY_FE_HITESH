import React from 'react';

function TaskbarApp() {
  return (
    <>
      <div className='container-fluid taskbar'>
        <div className='container d-flex justify-content-between pt-2 task-head'>
            <div className='col-md-4 col-12 d-flex inner'>
              <a href='#'>AboutUs : </a> &nbsp;
              <a href='#'>My Account : </a> &nbsp;
              <a href='#'>Wishlist : </a> &nbsp;
              <a href='#'>Order Tracking : </a> in
            </div>
            <div className='col-md-4 col-12 inner'>
              <p>Get great devices to 50% off <a href=''>View detail</a></p>
            </div>
            <div className='col-md-4 col-12 inner' align="end">
              <span>Need help?  Call Us = <a href=''>1900 888</a>&nbsp;</span>
              <select>
                <option>English</option>
                <option>Hindi</option>
                <option>Gujarati</option>
              </select>
              <select>
                <option>USD</option>
                <option>Rupee</option>
                <option>GBP</option>
                <option>Euro</option>
                <option>Swiss</option>
                <option>Doller</option>
              </select>
            </div>
        </div>
      </div>
    </>
  );
}

export default TaskbarApp;
