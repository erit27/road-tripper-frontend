import './SinglePost.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import relativeTime from '../../Utils';


export default function SinglePost({postId, serverUrl}) {
  const [post, setPost] = useState([]);
  const jwtToken = localStorage.getItem('jwt_token');

  useEffect( () => {
    axios
      .get(`${serverUrl}/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      })
      .then((response) => {
        setPost(response.data)
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="sp">
      <div className="sp__wrapper">
        <div className="sp__top">
          <img src={post.hero_photo_url} alt={post.title} className="sp__hero"/>
        </div>
        <div className="sp__bottom">
          <div className="sp__details">{`${post.first_name} ${post.last_name}, ${relativeTime(new Date(post.created_at).getTime())}`}</div>
          <div className="sp__title">{post.title}</div>
          { post.private_content && (
          <div className="sp__privateContent">
            <h2 className='sp__subtitle'>Family / Friends: </h2>
            <p>{post.private_content}</p>
          </div>
          )}
          <div className='sp__content'>{post.content}</div>
        </div>
      </div>
    </div>
  )
}