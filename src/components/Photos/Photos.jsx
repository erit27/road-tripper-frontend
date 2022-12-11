import './Photos.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";


export default function Photos({serverURL}) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`${serverURL}/photos`)
      .then((response) => {
        setPhotos(response.data);
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dgmhbuw8l'
    }
  })

  return (
    <div>
      <div className="images__gallery">
        {photos.map(photo => {
          return (
            <img src={photo.secure_url} alt={photo.public_id} width='200px' height='200px' />
          )
        })}
      </div>
    </div>
  )
}
