import './LoginComponent.scss';
import { Link } from 'react-router-dom';
import loginLogo from '../../assets/images/logos/logo_small_gold.svg';
import motoLogo from '../../assets/images/logos/moto_logo.svg';
import { useEffect, useState } from 'react';

export default function LoginComponent({handleLogin, loggedIn, user, serverUrl, loadProfile}) {
  const [formUser, setFormUser] = useState('')
  const [formPassword, setFormPassword] = useState('')
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null)

  useEffect(() => {
    if(formUser !== '') {
      setNameError(null)
    } else {
      setNameError(true)
    }
  }, [formUser])

  useEffect(() => {
    if (formPassword !== '') {
      setPasswordError(null)
    } else {
      setPasswordError(true)
    }
  }, [formPassword])

  return (
    <div className="login__wrapper">
      <div className="login__logo">
        <img src={loginLogo} alt="RT Logo" className='logo__login'/>
        <img src={motoLogo} alt="Moto Logo" className='logo__login'/>
      </div>
      { !loggedIn ? (
      <>
      <div className="login__hello">Welcome to Roadtripper, please log in below</div>
      <div className="login__form">
        <form onSubmit={handleLogin} className='login__form--form form'>
          <label htmlFor="username" className="form__element">
            Username:
            <input 
            type="text" 
            name='username' 
            className='form__input' 
            placeholder='username'
            onChange={(e) => setFormUser(e.target.value)}
            />
            { nameError && (
              <div className='form__error'> This field is required</div>
            )}
          </label>
          <label htmlFor="password" className="form__element">
            Password: 
            <input 
            type='password' 
            name='password' 
            className='form__input' 
            placeholder='password'
            onChange={(e) => setFormPassword(e.target.value)}
            />
            { passwordError && (
              <div className='form__error'> This field is required</div>
            )}
          </label>
          
          <button type='submit' className='btn btn-primary btn-login'>Log In</button>
        </form>
      </div>
      </>
      ) : (
        <div> 
          <h2 className='login__welcome'> You're logged in! </h2>
          <h2 className='login__welcome'> Welcome Back {user.username} </h2>
        </div>
      )}
      { !loggedIn? 
      
      <div className="login__new"><Link to='/createaccount'>New user? Create Account here!</Link></div>
       : ''}
      
    </div> 
    
    
  )
}