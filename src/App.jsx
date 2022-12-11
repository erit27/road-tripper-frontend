import LandingPage from './pages/LandingPage/LandingPage';
import PageHeader from './components/PageHeader/PageHeader';
import AboutUs from './pages/AboutUs/AboutUs';
import Gallery from './pages/Gallery/Gallery';
import Login from './pages/Login/Login';
import Map from './pages/Map/Map';
import PostPage from './pages/PostPage/PostPage';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Settings from './pages/Settings/Settings';
import './App.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';

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
      console.log(user)
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
        console.log('user:', response.data.user)
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

  const handleSignup = (event, salt) => {
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
          <Route path='/' element={<LandingPage serverUrl={serverURL}/>} />
          <Route path='/posts/:id' element={<PostPage serverUrl={serverURL}/>} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery serverURL={serverURL}/>} />
          <Route path='/map' serverURL={serverURL} element={<Map />} />
          <Route path='/login' element={<Login loggedIn={loggedIn} user={user} loadProfile={loadProfile} serverURL={serverURL}/>} /> 
          <Route path='/createaccount' element={<CreateAccount handleSignup={handleSignup}/>} />
          <Route path='/settings' element={<Settings loggedIn={loggedIn} serverURL={serverURL}/>} />
        </Routes>
        </div>
      </ BrowserRouter>
    
  );
}
