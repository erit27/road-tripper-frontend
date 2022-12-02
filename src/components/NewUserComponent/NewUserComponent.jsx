import './NewUserComponent.scss';
import '../LoginComponent/LoginComponent.scss';
import loginLogo from '../../assets/images/logos/logo_small_gold.svg';
import motoLogo from '../../assets/images/logos/moto_logo.svg';

export default function NewUserComponent() {
  return (
    <div className="newUser__wrapper">
      <div className="newUser__logo">
        <img src={loginLogo} alt="RT Logo" className='logo__login'/>
        <img src={motoLogo} alt="Moto Logo" className='logo__login'/>
      </div>
      <div className="newUser__hello">New here? Let's get started:</div>
      <div className="newUser__form">
        <form action="submit" className='newUser__form--form form'>
          <div className="form__element">
            Username:
            <input type="text" name='username' />
          </div>
          <div className="form__element">
            First Name - optional: 
            <input type='text' name='firstName' />
          </div>
          <div className="form__element">
            Last name - optional: 
            <input type='text' name='lastName' />
          </div>
          <div className="form__element">
            Password: 
            <input type='password' name='password' />
          </div>
          <div className="form__element">
            Confirm Password: 
            <input type='password' name='password' />
          </div>
          <button type='submit' className='btn btn-primary'>Create Account</button>
        </form>
      </div>
    </div> 
  )
}