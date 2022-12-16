import './Login.scss';
import axios from 'axios';
import loginHero from '../../assets/images/images/login_hero.jpeg';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

export default function Login({loggedIn, user, loadProfile, serverUrl}) {
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${serverUrl}/login`, {
        username: event.target.username.value,
        password: event.target.password.value
      })
      .then((response) => {
        if(response.data.token) {
          loadProfile(response.data.token);
          localStorage.setItem('jwt_token', response.data.token);
        }
      })
      .catch((err) => {console.log(err, `there was an error logging you in `)})
    }
    
  return (
    <div className='login'>
      <div className="login__wrap">
        <div className="login__left">
          <img src={loginHero} alt="Motorcycle in mountains" className='login__hero'/>
        </div>
        <div className="login__right">
          <LoginComponent handleLogin={handleLogin} loggedIn={loggedIn} user={user} serverUrl={serverUrl} loadProfile={loadProfile}/>
        </div>
      </div>
    </div>
  )
}