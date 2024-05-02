import logo from './logo.svg';
import './App.css';
import './index.css';

import Navbar from './Component/Navbar';
import { Routes, Route } from "react-router-dom";
import Storedata from './Component/Storedata';
import ShowStory from './Component/ShowStory';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Storedata/>} />
      <Route path='/ShowStory' element={<ShowStory/>} />
    </Routes>
    </>
  );
}

export default App;
