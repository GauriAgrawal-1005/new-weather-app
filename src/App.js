import LoginForm from './components/LoginForm';
// import Auth from './components/Auth';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import './App.css';
import Dashboard from './components/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  
  return (
    
    <Router>
        <Routes>
          {/* <Route path="/" element={<Auth />} /> */}
          {/* <Route path="/landingPage" element={<LandingPage />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
