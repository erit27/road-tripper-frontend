import './PageHeader.scss';
import { Link } from 'react-router-dom';
import mobileLogo from '../../assets/images/logos/logo_small_blue.svg';
import tabletLogo from '../../assets/images/logos/logo_lg_blue.svg';

export default function PageHeader() {
  return (
    <>
  <div className="pageHeader__wrapper">
    <div className="pageHeader__logo">
      <Link to='/' ><img src={mobileLogo} alt="not loading" className='pageHeader__logo--mobile'/></Link>
      <Link to='/' ><img src={tabletLogo} alt="not loading" className='pageHeader__logo--tablet'/></Link>
    </div>
    <div className="pageHeader__nav">
      <Link to='/'><p className="pageHeader__nav--link">Home</p></Link>
      <Link to='/aboutus'><p className="pageHeader__nav--link">About Us</p></Link>
      <Link to='/gallery'><p className="pageHeader__nav--link">Gallery</p></Link>
      <Link to='/login'><p className="pageHeader__nav--link">Log In</p></Link>
    </div>
  </div>
    
    </>
  )
}