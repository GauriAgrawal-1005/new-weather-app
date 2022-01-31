import LoginForm from './components/LoginForm';
import Auth from './components/Auth';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    // <Router>
      <div className="App">
        <Auth />
        {/* <Dashboard/> */}
        {/* <Routes>
          <Route exact path="/" element={<Auth />}></Route>
          <Route exact path="/landingPage" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>       */}
      </div>                    
    // </Router>
  );
}

export default App;
