import './Map.scss';
import { useMemo, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY || ``;

function MapLoad({serverUrl}) {
  const [locations, setLocations] = useState([]);
  const center = useMemo(() => ({lat: -20, lng: -65}), [])

  useEffect(() => {
    axios
      .get(`http://localhost:8080/locations`)
      .then((response) => {
        setLocations(response.data)
      })
      .catch((err) => console.log(err))
  }, [])
 

  return <GoogleMap zoom= {3} center={center} mapContainerClassName='map__container'> 
    {locations.map((loc) => (
      <MarkerF key={loc.lat} position={{lat: loc.lat, lng: loc.long}} />
      // key={API_KEY} was above before
    ))}
  </GoogleMap>
}

export default function Map({serverUrl}) {
  const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_API_KEY
    })

    if( !isLoaded) return <div>Loading...</div>
  return <MapLoad serverUrl={serverUrl} />

}

