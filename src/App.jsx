import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './pages/LandingPage/LandingPage';
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
        console.log(response.data)
        setUser(response.data.user);
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${serverURL}/login`, {
        username: event.target.username.value,
        password: event.target.password.value
      })
      .then((response) => {
        if(response.data.token) {
          console.log('signed in success!')
          loadProfile(response.data.token);
          localStorage.setItem('jwt_token', response.data.token);
        }
      })
      .catch((err) => {console.log(err)})
  }

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('jwt_token');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<Login loggedIn={loggedIn} user={user} handleLogin={handleLogin} />} /> 
          <Route path='/createaccount' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
