import './Settings.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import UserPermissions from '../../components/UserPermissions/UserPermissions'
import UploadMedia from '../../components/UploadMedia/UploadMedia'
import NewPost from '../../components/NewPost/NewPost'
import PostList from '../../components/PostList/PostList'

export default function Settings({serverUrl, loggedIn, user}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${serverUrl}/posts/postinfo`)
      .then((response) => {
        setPosts(response.data);
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="settings__wrap">
        <h1 className='settings'>Settings</h1>
        <UploadMedia />
        <UserPermissions serverUrl={serverUrl}/>
        <NewPost serverUrl={serverUrl} user={user}/>
        <PostList serverUrl={serverUrl} posts= {posts}/>
      </div>
    </>
  )
}