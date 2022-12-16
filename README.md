# Road Tripper - Front End
Road Tripper is a travel blog tailored to road trippers. It includes a map to outline the progress of the travellers, a gallery, and a post page. The site admins are able to grant access to users to also view 'family/friends only' content. 

## Related
Here is the server for this project:
[Road Tripper Back End](https://github.com/erit27/road-tripper-backend)

## Set Up
1. Git Clone repository to your local machine (and do same for server side). 
2. Install required dependencies: 
``` npm install ```
3. Start the server in a seperate terminal:
``` npm run dev```
4. To start the site: 
``` npm start ```

## Environment Variables
A .env.sample has been provided, but you will need to create your own .env file with the appropriate fields: 
* A cloudinary name, key, and secret credentials can be obtained for free, please refer to the [Cloudinary developer get started guide](https://cloudinary.com/documentation/how_to_integrate_cloudinary) for more detail. 
* The REACT_APP_API_KEY refers to the Google Maps API key, you will need to sign up for your [own google maps api key](https://developers.google.com/maps).
* The server URL is preset to 8080, but you will need to change it if you are running the server on a different port.

## Technologies Used
### Framework : [React](https://reactjs.org/)
### Styling: [Sass](https://sass-lang.com/documentation/js-api/)
### API's: 
#### [Google Maps API](https://developers.google.com/maps)
#### [Cloudinary](https://cloudinary.com/)

### Libraries:
#### [React Router](https://www.npmjs.com/package/react-router-dom)
#### [Axios](https://www.npmjs.com/package/axios)
#### [React Response Carousel](https://www.npmjs.com/package/react-responsive-carousel)
#### [React Google Maps](https://www.npmjs.com/package/react-google-maps)

### Backend: See [Road Tripper Back End](https://github.com/erit27/road-tripper-backend)
