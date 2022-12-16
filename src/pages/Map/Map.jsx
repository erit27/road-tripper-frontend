import "./Map.scss";
import { useMemo, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";

function MapLoad({ serverUrl }) {
  const [locations, setLocations] = useState([]);
  const center = useMemo(() => ({ lat: -20, lng: -65 }), []);
  const jwtToken = localStorage.getItem("jwt_token");
  const mapStyle = require("../../assets/mapStyle.json");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/locations`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        setLocations(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="map">
      {" "}
      <GoogleMap
        options={{ styles: mapStyle }}
        zoom={3}
        center={center}
        mapContainerClassName="map__container"
      >
        {locations.map((loc) => (
          <MarkerF key={loc.lat} position={{ lat: loc.lat, lng: loc.long }} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default function Map({ serverUrl }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapLoad serverUrl={serverUrl} />;
}
