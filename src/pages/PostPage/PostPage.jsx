import './PostPage.scss'
import { useState, useEffect} from 'react'
import axios from 'axios'
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