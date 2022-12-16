import LandingPage from './pages/LandingPage/LandingPage';
import PageHeader from './components/PageHeader/PageHeader';
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

const serverUrl = 'http://localhost:8080';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [access, setAccess] = useState('public')
  const [user, setUser] = useState(null);

  useEffect( () => {
    const jwtToken = localStorage.getItem('jwt_token');
    if (jwtToken) {
      loadProfile(jwtToken);
    }
  }, [])

  const loadProfile = (jwtToken) => {
    axios
      .get(`${serverUrl}/profile`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      })
      .then((response) => {
        setLoggedIn(true);
        setUser(response.data.user);
        setAccess(response.data.user.access)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    setAccess('public')
    localStorage.removeItem('jwt_token');
    // navigate('/login')
  };

  const handleSignup = (event) => {
    event.preventDefault();
    axios
      .post(`${serverUrl}/createaccount`, {
        username: event.target.username.value,
        password: event.target.password.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value
      })
      .then( (response) => {
        if(response.data.success) {
          console.log("User signed up: ", response.data.success)
        }
        // navigate('/login')
      })
      .catch(err=> console.log(err))
  }

  return (
    
      <BrowserRouter>
        <div className="App">
          <PageHeader loggedIn={loggedIn} handleLogout={handleLogout} access={access}/> 
        <Routes>
          <Route path='/' element={<LandingPage serverUrl={serverUrl}/>} />
          <Route path='/posts/:id' element={<PostPage serverUrl={serverUrl}/>} />
          <Route path='/gallery' element={<Gallery serverUrl={serverUrl}/>} />
          <Route path='/map' serverUrl={serverUrl} element={<Map />} />
          <Route path='/login' element={<Login loggedIn={loggedIn} user={user} loadProfile={loadProfile} serverUrl={serverUrl}/>} /> 
          <Route path='/createaccount' element={<CreateAccount handleSignup={handleSignup}/>} />
          <Route  path='/settings' element={<Settings access={access} loggedIn={loggedIn} serverUrl={serverUrl} user={user}/>} />
        </Routes>
        </div>
      </ BrowserRouter>
    
  );
}
