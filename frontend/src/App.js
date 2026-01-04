import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpotsPage from './pages/SpotsPage';
import UsersPage from './pages/UsersPage';
import SpotDetailsPage from  './pages/SpotDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/spots" element={<SpotsPage/>} />
        <Route path="/spots/:spotId" element={<SpotDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
