import './NewPost.scss'

export default function NewPost() {
  return (
    <div className="np__wrap">
      <h1 className='np__title'>Add New Post</h1>
      <div className="np__formWrap">
        <form action="" className="np__form">
          <div className="np__formElement">
            <label htmlFor="postTitle" className='np__formLabel'>
            Post Title </label>
            <input 
            type="text"
            name='postTitle'
            className='np__postTitle'
            placeholder='Post Title' />
          </div>
          <div className="np__formElement">
            <label htmlFor="postPhoto" className='np__formLabel'>Post Photo</label>
            <input 
            type="text"
            name='postPhoto'
            className='np__postPhoto'
            placeholder='Post Photo' />
          </div>
          <div className="np__formElement">
            <label htmlFor="postContent" className='np__formLabel'>Post Content</label> 
              <textarea 
              cols="30" 
              rows="10"
              name='postContent'
              className='np__postContent'
              placeholder='Write a post that will be publically viewable here!' />
          </div>
          <div className="np__formElement">
            <label htmlFor="postPrivateContent " className='np__formLabel'>Private Content</label> 
            <textarea 
            cols="30" 
            rows="10"
            name='postPrivateContent'
            className='np__postPrivateContent'
            placeholder='Add additional content for family/friends only here!' />
          </div>
          <button type="submit" className='btn np__btn'>Post</button>
        </form>
      </div>
    </div>
  )
}