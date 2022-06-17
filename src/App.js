import React from 'react';
import { Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Page404 from './pages/Page404';
// import MovieCard from './components/MovieCard';

const products = [
  {
    name: "Raiden",
    text: "Metal Gear Rising",
    imgalt: "Raiden"
  },
  {
    name: "Naked Snake",
    text: "Metal Gear Solid 3",
    imgalt: "Snake"
  },
  {
    name: "Big Boss",
    text: "Metal Gear Solid: Peace Walker",
    imgalt: "Snake"
  },
  {
    name: "Solid Snake",
    text: "Metal Gear",
    imgalt: "Snake"
  }

]

function App() {
  return (
    <>
      <BrowserRouter>
      <AppNavBar />
      <Container fluid>
        {/*{localStorage.getItem('name') === null ? <h1 className="H1" style={{textAlign: 'center'}}>Welcome Soldier!</h1>
          : <h1 className="H1" style={{textAlign: 'center'}}>Welcome {localStorage.getItem('name')}!</h1>}*/}
        {/*<h1 className="H1" style={{textAlign: 'center'}}>Welcome Soldier!</h1>*/}
        <Routes>
          <Route path="/" element={<Home home={products} />} />
          <Route path="/home" element={<Home home={products} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
