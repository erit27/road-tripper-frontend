import './PostCard.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function Singlepost({postId, title, heroUrl, name, createdAt}) {

  // useEffect( () => {
  //   const jwtToken = localStorage.getItem('jwt_token');
  //   if (jwtToken) {
  //     loadProfile(jwtToken);
  //   }
  // }, [])

  // useEffect(() => {

  // }, User)
  // const loadProfile = (jwtToken) => {
  //   axios
  //     .get(`${serverURL}/post/${postId}`, {
  //       headers: {
  //         Authorization: `Bearer ${jwtToken}`
  //       }
  //     })
  //     .then((response) => {
  //       setLoggedIn(true);
  //       setUser(response.data.user);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
  const linkPath = `/posts/${postId}`
  const heroPath = `${heroUrl}`
  return (
   
    <div className="card__wrapper">
      <Link to={linkPath} >
      <div className="card__top">
        <img className='card__hero' src={heroUrl} alt="" />
      </div>
      <div className="card__details">{name}, {createdAt}</div>
      <div className="card__title"><h1>{title}</h1></div>
      </Link>
    </div>
    
  )
}