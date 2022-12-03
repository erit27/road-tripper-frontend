import './Login.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import BodyTemplate from '../../components/BodyTemplate/BodyTemplate';
import loginHero from '../../assets/images/images/login_hero.jpeg';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

export default function Login() {
  return (
    <>
      <PageHeader />
      
      <div className="login__wrap">
        <div className="login__left">
          <img src={loginHero} alt="Motorcycle in mountains" className='login__hero'/>
        </div>
        <div className="login__right">
          <LoginComponent />
        </div>
      </div>
    </>
  )
}