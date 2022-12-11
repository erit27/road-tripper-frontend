import './Photos.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import {Cloudinary} from "@cloudinary/url-gen";
import { render } from 'react-dom';
import {AdvancedImage} from '@cloudinary/react';
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

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  // const myImage = cld.image('Peru/IMG_5093_pe7bxa'); 
  // const myImagea = cld.image('Peru/IMG_5324_vmdo1r.jpg'); 

  // // Resize to 250 x 250 pixels using the 'fill' crop mode.
  // myImage.resize(fill().width(350).height(250));
  // myImagea.resize(fill().width(350).height(250));

  // Render the image in a React component.
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

// export function GetStaticProps() {
//   const results = 
//     axios
//       .get(`api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/resources/image`, {
//         headers: {
//           Authorization: `Basic ${Buffer.from(process.env.REACT_APP_CLOUDINARY_KEY + ':'+ process.env.REACT_APP_CLOUDINARY_SECRET).toString('base64')}`
//         }
//       })
//       .then((response) => {
//         response.json()
//         console.log('results:', results)
//         const {resources} = results;
//         const images = resources.map(resource => {
//           return {
//             id: resource.asset_id,
//             url: resource.secure_url,
//             title: resource.public_id,
//             width: resource.width,
//             height: resource.height,
//           }
//         })
//       })
//       .catch((err) => {console.log(err)})

//   return {
//     props: {
//       images
//     }
//   }
// }