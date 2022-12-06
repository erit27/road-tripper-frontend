import './Map.scss';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'


const api_url = 'https://maps.googleapis.com/maps/api/js?key='



function MapLoad() {
  const locations = [
    {
      lat: '-13.16111059482145',
      long: '-74.22765197922901'
    },
    {
      lat: '-33.45999635003689',
      long: '-70.64562002541481'
    },
    {
      lat: '10.37216226417554',
      long: '-75.50766986918126'
    },
    {
      lat: '-0.19090141314042',
      long: '-78.48310673463420'
    },
  ]
  const center = useMemo(() => ({lat: -20, lng: -65}), [])

  return <GoogleMap zoom= {3} center={center} mapContainerClassName='map__container'> 
    {/* <Marker position={{lat: locations[0].lat, long: locations[0].long}} /> */}
    <MarkerF key={api_key} position={{lat: -20, lng: -65}} />
  </GoogleMap>
}

export default function Map() {
  const { isLoaded } = useLoadScript({
      googleMapsApiKey: api_key
    })

    if( !isLoaded) return <div>Loading...</div>
  return <MapLoad />

}

