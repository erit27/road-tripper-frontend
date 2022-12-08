import './LandingPage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import BodyTemplate from '../../components/BodyTemplate/BodyTemplate';
import PostCard from '../../components/PostCard/PostCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DB_URL = process.env.REACT_APP_SERVER_URL || ``;

export default function LandingPage() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get(`${DB_URL}/posts/postinfo`)
      .then((response) => {
        setPosts(response.data);
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }, [])
  

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard 
        className='posts_single'
        title={post.title}
        postId={post.id}
        heroUrl={post.hero_photo_url}
        name={post.first_name}
        createdAt={post.created_at}
      />
      ))}
    </div>

      
    
  )
}