import './PostPage.scss'
import { useParams } from 'react-router-dom'
import SinglePost from '../../components/SinglePost/SinglePost'

export default function PostPage({serverUrl}) {
  const {id} = useParams();

  return (
    <>
      <SinglePost postId={id} serverUrl={serverUrl}/>
    </>
  )
}