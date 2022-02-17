import LoginForm from './components/LoginForm';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import './App.css';
import Dashboard from './components/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
import {UserContext} from './contexts/Context';


function App() {
  
  return (
    <UserContext>
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
    </Router>
    </UserContext>
  );
}

export default App;