import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpotsPage from './pages/SpotsPage';
import UsersPage from './pages/UsersPage';
import SpotDetailsPage from  './pages/SpotDetailsPage';
import LoginUserForm from './components/LoginUserForm';
import SignupUserForm from './components/SignupUserForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/spots" element={<SpotsPage/>} />
        <Route path="/spots/:spotId" element={<SpotDetailsPage/>} />
        <Route path="/login" element={<LoginUserForm/>} />
        <Route path="/signup" element={<SignupUserForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
