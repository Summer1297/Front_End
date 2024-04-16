// App.jsx
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';

import { useState } from 'react';

function App() {
  const [page, setPage] = useState('Home');

  return (
    <>
      <div className="app">
        {page === 'Home' && <Home setPage={setPage} />} 
        {page === 'About' && <About setPage={setPage} />} 
        {page === 'Register' && <Register setPage={setPage} />} 
      </div>
    </>
  );
}

export default App;
