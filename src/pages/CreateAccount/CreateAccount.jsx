import './CreateAccount.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import loginHero from '../../assets/images/images/login_hero.jpeg';
import NewUserComponent from '../../components/NewUserComponent/NewUserComponent';
import axios from 'axios';

export default function CreateAccount({handleSignup}) {

  return (
    <>
      <PageHeader />
      <div className="login__wrap">
        <div className="login__left">
          <img src={loginHero} alt="Motorcycle in mountains" className='login__hero'/>
        </div>
        <div className="login__right">
          <NewUserComponent handleSignup={handleSignup}/>
        </div>
      </div>
    </>
  )
}