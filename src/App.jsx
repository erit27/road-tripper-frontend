import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import LandingPage from './pages/LandingPage/LandingPage';
import PageHeader from './components/PageHeader/PageHeader';
import AboutUs from './pages/AboutUs/AboutUs';
import Gallery from './pages/Gallery/Gallery';
import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import './App.scss';

const serverURL = 'http://localhost:8080';
const loginURL = `${serverURL}/login`;
const signupURL = `${loginURL}/createaccount`;


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);

  

  useEffect( () => {
    const jwtToken = localStorage.getItem('jwt_token');
    if (jwtToken) {
      loadProfile(jwtToken);
    }
  }, [])

  const loadProfile = (jwtToken) => {
    axios
      .get(`${serverURL}/profile`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      })
      .then((response) => {
        setLoggedIn(true);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('jwt_token');
  };

  const handleSignup = (event) => {
    event.preventDefault();
    axios
      .post(`${serverURL}/createaccount`, {
        username: event.target.username.value,
        password: event.target.password.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value
      })
      .then( (response) => {
        if(response.data.success) {
          setIsSignedUp(true);
        }
      })
      .catch(err=> console.log(err))
  }

  return (
    
      <BrowserRouter>
        <div className="App">
          <PageHeader loggedIn={loggedIn} handleLogout={handleLogout} /> 
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<Login loggedIn={loggedIn} user={user} loadProfile={loadProfile} serverURL={serverURL}/>} /> 
          <Route path='/createaccount' element={<CreateAccount handleSignup={handleSignup}/>} />
        </Routes>
        </div>
      </ BrowserRouter>
    
  );
}
