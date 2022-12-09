import './Photos.scss'
import axios from 'axios';
import { useEffect } from 'react';

export default function Photos() {
  useEffect( () => {
    GetStaticProps()
  }, [])


  return (
    <>
    </>
  )
}

export async function GetStaticProps() {
  const results = await 
    axios
      .get(`api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/resources/image`, {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.REACT_APP_CLOUDINARY_KEY + ':'+ process.env.REACT_APP_CLOUDINARY_SECRET).toString('base64')}`
        }
      })
      .then((response) => {
        response.json()
        console.log('results:', results)
        const {resources} = results
      })
      .catch()

  return {
    props: {

    }
  }
}