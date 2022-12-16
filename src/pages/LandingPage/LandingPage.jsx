import './LandingPage.scss';
import PostCard from '../../components/PostCard/PostCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DB_URL = process.env.REACT_APP_SERVER_URL || ``;

export default function LandingPage({serverUrl}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${DB_URL}/posts/postinfo`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard 
        key={post.id}
        className='posts_single'
        title={post.title}
        postId={post.id}
        heroUrl={post.hero_photo_url}
        name={post.first_name}
        createdAt={post.created_at}
        serverUrl={serverUrl}
      />
      ))}
    </div>
  )
}