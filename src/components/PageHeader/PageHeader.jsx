import './PageHeader.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import mobileLogo from '../../assets/images/logos/logo_small_blue.svg';
import tabletLogo from '../../assets/images/logos/logo_lg_blue.svg';
import homeIcon from '../../assets/images/icons/posts.svg';
import galleryIcon from '../../assets/images/icons/gallery.svg';
import mapIcon from '../../assets/images/icons/map.svg';
import loginIcon from '../../assets/images/icons/login.svg';
import logoutIcon from '../../assets/images/icons/logout.svg';
import settingsIcon from '../../assets/images/icons/settings.svg';

export default function PageHeader({loggedIn, handleLogout, access}) { 
  const navigate = useNavigate();
  return (

  <div className="pageHeader__wrapper">
    <div className="pageHeader__logo">
      <Link to='/' ><img src={mobileLogo} alt="not loading" className='pageHeader__logo--mobile'/></Link>
      <Link to='/' ><img src={tabletLogo} alt="not loading" className='pageHeader__logo--tablet'/></Link>
    </div>
    <div className="pageHeader__nav">
      <Link to='/'>
        <p className="pageHeader__nav--link displayNone__mobile">Home</p>
        <img src={homeIcon} alt="home icon" className='displayNone__tablet icon__header' />
      </Link>
        
      <Link to='/map'>
        <p className="pageHeader__nav--link displayNone__mobile">Map</p>
        <img src={mapIcon} alt="home icon" className='displayNone__tablet icon__header' />
      </Link>
      <Link to='/gallery'>
        <p className="pageHeader__nav--link displayNone__mobile">Gallery</p>
        <img src={galleryIcon} alt="home icon" className='displayNone__tablet icon__header' />
      </Link>
      { !loggedIn && (
        <Link to='/login'>
        <p className="pageHeader__nav--link displayNone__mobile">Log In</p>
        <img src={loginIcon} alt="home icon" className='displayNone__tablet icon__header' />
      </Link>
      )}
      {access === 'admin' && (
        <Link to='/settings' >
        <p className="pageHeader__nav--link displayNone__mobile">Settings</p>
        <img src={settingsIcon} alt="home icon" className='displayNone__tablet icon__header' />
      </Link>
      )}
      {loggedIn && (
        <button 
        onClick={() => {
          handleLogout()
          navigate('/');
        }} 
        className="pageHeader__nav--link pageHeader__btn">
          <img src={logoutIcon} alt="logout icon" className='displayNone__tablet icon__header'></img>
          <p className='displayNone__mobile'>Log Out</p>
      </button>
      )}
    </div>
  </div>
  
  )
}