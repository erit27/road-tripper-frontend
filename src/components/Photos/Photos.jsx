import './Photos.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Photos({serverUrl}) {
  const [photos, setPhotos] = useState([]);
  const [formattedPhotos, setFormattedPhotos] = useState([])

  useEffect(() => {
    axios
      .get(`${serverUrl}/photos`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const images = photos.map(photo => (photo.secure_url))
    setFormattedPhotos(images)
  }, [photos])

  return (
  <div className="box">
    <Carousel  useKeyboardArrows={true}>
      {formattedPhotos.map((URL, index) => (
        <div className="slide">
          <img className="photos__img" alt="sample_file" src={URL} key={index} />
        </div>
      ))}
    </Carousel>
    </div>
  )
}
