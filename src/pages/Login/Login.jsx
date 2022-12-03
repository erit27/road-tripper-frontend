import './Login.scss';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import BodyTemplate from '../../components/BodyTemplate/BodyTemplate';
import loginHero from '../../assets/images/images/login_hero.jpeg';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

export default function Login({loggedIn, user, loadProfile, serverURL}) {
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${serverURL}/login`, {
        username: event.target.username.value,
        password: event.target.password.value
      })
      .then((response) => {
        if(response.data.token) {
          loadProfile(response.data.token);
          localStorage.setItem('jwt_token', response.data.token);
        }
      })
      .catch((err) => {console.log(err)})
  }
  return (
    <>
      <PageHeader />
      
      <div className="login__wrap">
        <div className="login__left">
          <img src={loginHero} alt="Motorcycle in mountains" className='login__hero'/>
        </div>
        <div className="login__right">
          <LoginComponent loggedIn={loggedIn} user={user} handleLogin={handleLogin} />
        </div>
      </div>
    </>
  )
}