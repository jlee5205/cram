import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SpotsPage from './pages/SpotsPage';
import UsersPage from './pages/UsersPage';
import SpotDetailsPage from  './pages/SpotDetailsPage';
import Login from './pages/Login';
import SignupUserForm from './components/SignupUserForm';
import Header from "./components/Header";

function App() {
  const [users, setUser] = useState(null);
  return (
    <Router>
      <Header user={users} setUser={setUser}/>
      <Routes>
        <Route path="/spots" element={<SpotsPage/>} />
        <Route path="/spots/:spotId" element={<SpotDetailsPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignupUserForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
