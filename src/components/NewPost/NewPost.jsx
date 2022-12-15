import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './NewPost.scss'
import axios from 'axios';

export default function NewPost({serverUrl, user}) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [heroUrl, setHeroUrl] = useState('');
  const [postContent, setPostContent] = useState('');
  const [privateContent, setPrivateContent] = useState('')

  const [titleError, setTitleError] = useState(null);
  const [photoError, setPhotoError] = useState(null);
  const [postError, setPostError] = useState(null);
  const [privateContentError, setPrivateContentError] = useState(null);

  useEffect(() => {
    if (title !== '') {
      setTitleError(null)
    } else {
      setTitleError(true)
    }
  }, [title])

  useEffect(() => {
    if (heroUrl !== '') {
      setPhotoError(null)
    } else {
      setPhotoError(true)
    }
  }, [heroUrl])

  useEffect(() => {
    if (postContent !== '') {
      setPostError(null)
    } else {
      setPostError(true)
    }
  }, [postContent])

  useEffect(() => {
    if (privateContent !== '') {
      setPrivateContentError(null)
    } else {
      setPrivateContentError(true)
    }
  }, [privateContent])

  function handleAddPost(event) {
    event.preventDefault();
    if( titleError === true || postError === true || privateContentError === true ) {
      alert('Please complete the required fields!')
    } else if (!photoError) {
      axios.post(`${serverUrl}/posts/new`, {
      user_id: user.id,
      title: title,
      hero_photo_url: heroUrl,
      content: postContent,
      private_content: privateContent
    });
    alert(`Your post was added!`);
    navigate(`/`)
    } else {
      axios.post(`${serverUrl}/posts/new`, {
        user_id: user.id,
        title: title,
        content: postContent,
        private_content: privateContent
      });
      alert(`Your post was added!`);
      navigate(`/`)
    }
  }

  return (
    <div className="np__wrap">
      <h1 className='np__title'>Add New Post</h1>
      <div className="np__formWrap">
        <form onSubmit={handleAddPost} className="np__form">
          <div className="np__formElement">
            <label htmlFor="postTitle" className='np__formLabel'>
            Post Title </label>
            <input 
            type="text"
            name='postTitle'
            className='np__postTitle'
            placeholder='Post Title'
            onChange={(e) => setTitle(e.target.value)} />
            {titleError && (
              <div className="np__error">This field is required</div>
            )}
          </div>
          <div className="np__formElement">
            <label htmlFor="postPhoto" className='np__formLabel'>Post Photo URL</label>
            <input 
            type="text"
            name='postPhoto'
            className='np__postPhoto'
            placeholder='Post Photo'
            onChange={(e) => setHeroUrl(e.target.value)} />
          </div>
          <div className="np__formElement">
            <label htmlFor="postContent" className='np__formLabel'>Post Content</label> 
              <textarea 
              cols="30" 
              rows="10"
              name='postContent'
              className='np__postContent'
              placeholder='Write a post that will be publically viewable here!'
              onChange={(e) => setPostContent(e.target.value)} />
              {postError && (
              <div className="np__error">This field is required</div>
            )}
          </div>
          <div className="np__formElement">
            <label htmlFor="postPrivateContent " className='np__formLabel'>Private Content</label> 
            <textarea 
            cols="30" 
            rows="10"
            name='postPrivateContent'
            className='np__postPrivateContent'
            placeholder='Add additional content for family/friends only here!'
            onChange={(e) => setPrivateContent(e.target.value)} />
            {privateContentError && (
              <div className="np__error">This field is required</div>
            )}
          </div>
          <button type="submit" className='btn np__btn'>Post</button>
        </form>
      </div>
    </div>
  )
}