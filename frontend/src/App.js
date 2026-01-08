import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";

import SpotsPage from './pages/SpotsPage';
import SpotDetailsPage from  './pages/SpotDetailsPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route path="/spots" element={<SpotsPage/>} />
        <Route path="/spots/:spotId" element={<SpotDetailsPage/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/signup" element={<Signup setUser={setUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;
