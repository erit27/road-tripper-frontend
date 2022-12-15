import './PostList.scss'
import deleteIcon from '../../assets/images/icons/delete.svg'

export default function PostList({posts}) {
  console.log('posts', posts)
  return (
    <div className='pl'>
     <h1 className='pl__title'>Posts Summary</h1>
      <div className="pl__wrapper">
        <div className="pl__individual">
          <div className="pl__left">POST TITLE</div>
          <div className="pl__mid">POST AUTHOR</div>
          <div className="pl__right">DELETE POST?</div>
        </div>
        {posts.map((post) => (
        <div className="pl__individual">
          <div className="pl__left">{post.title}</div>
          <div className="pl__mid">{post.first_name}</div>
          <button className="pl__right">
          <img src={deleteIcon} alt="Delete" /></button>
        </div>
        ))}
      </div>
    </div>
  )
}
