import './SinglePost.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function SinglePost({postId, serverUrl}) {
  const [post, setPost] = useState([]);

  useEffect( () => {
    const jwtToken = localStorage.getItem('jwt_token');
    console.log(`${serverUrl}/posts/${postId}`)
    if (jwtToken) {
      axios
        .get(`${serverUrl}/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        })
        .then((response) => {
          setPost(response.data)
          console.log(response.data[0])
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  return (
    <div className="card__wrapper">
      {/* <Link  >
      <div className="card__top">
        <img className='card__hero' src={heroUrl} alt="" />
      </div>
      <div className="card__details">{name}, {createdAt}</div>
      <div className="card__title"><h1>{title}</h1></div>
      </Link> */}
    </div>
    
  )
}