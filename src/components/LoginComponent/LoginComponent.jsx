import './LoginComponent.scss';
import { Link } from 'react-router-dom';
import loginLogo from '../../assets/images/logos/logo_small_gold.svg';
import motoLogo from '../../assets/images/logos/moto_logo.svg';

export default function LoginComponent() {
  return (
    <div className="login__wrapper">
      <div className="login__logo">
        <img src={loginLogo} alt="RT Logo" className='logo__login'/>
        <img src={motoLogo} alt="Moto Logo" className='logo__login'/>
      </div>
      <div className="login__hello">Welcome to Roadtripper, please log in below</div>
      <div className="login__form">
        <form action="submit" className='login__form--form form'>
          <div className="form__element">
            Username:
            <input type="text" name='username' />
          </div>
          <div className="form__element">
            Password: 
            <input type='password' name='password' />
          </div>
          <button type='submit' className='btn btn-primary'>Log In</button>
        </form>
      </div>
      <div className="login__new"><Link to='/createaccount'>New user? Create Account here!</Link></div>
    </div> 
    
    
  )
}