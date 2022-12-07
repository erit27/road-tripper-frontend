import './PostCard.scss';
import waterfall from '../../assets/images/images/waterfall.jpeg'
import rainforest from '../../assets/images/images/rainforest.jpeg'
import { Link } from 'react-router-dom';

export default function PostCard({userId, title, postId, heroUrl}) {
  const linkPath = `/posts/${postId}`
  return (
   
    <div className="card__wrapper">
      <Link to={linkPath} >
      <div className="card__top">
        <img className='card__hero' src={waterfall} alt="" />
      </div>
      <div className="card__details">{userId} Zahra, 3 months ago</div>
      <div className="card__title"><h1>{title}</h1></div>
      </Link>
    </div>
    
  )
}