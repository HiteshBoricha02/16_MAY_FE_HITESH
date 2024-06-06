import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <>
   
    <h1>the "react way" to render a list</h1>
    <div className='list'>
   
      <ul>
        {items.map(item => (
          <li key={item.id}>
          <input type='checkbox'/>  {item.name}
          </li>
        ))}
      </ul>
    </div>

    </>
  );
}

export default App;