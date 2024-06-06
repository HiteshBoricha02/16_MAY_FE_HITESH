import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import TaskbarApp from './components/Taskbar';
import HeaderApp from './components/Header';
import NavbarApp from './components/Navbar';
import SliderApp from './components/Slider';
import SlicksliderApp from './components/Slickslider';
function App() {
  return (
    <>
      <TaskbarApp />
      <HeaderApp />
      <NavbarApp />
      <SliderApp />
      <SlicksliderApp />
    </>
  )
}

export default App
