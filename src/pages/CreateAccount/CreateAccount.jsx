import "./CreateAccount.scss";
import loginHero from "../../assets/images/images/login_hero.jpeg";
import NewUserComponent from "../../components/NewUserComponent/NewUserComponent";

export default function CreateAccount({ handleSignup }) {
  return (
    <>
      <div className="login__wrap">
        <div className="login__left">
          <img
            src={loginHero}
            alt="Motorcycle in mountains"
            className="login__hero"
          />
        </div>
        <div className="login__right">
          <NewUserComponent handleSignup={handleSignup} />
        </div>
      </div>
    </>
  );
}
