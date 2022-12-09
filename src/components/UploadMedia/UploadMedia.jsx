import "./UploadMedia.scss";
import { useEffect, useRef } from "react";

export default function UploadMedia() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dgmhbuw8l",
        uploadPreset: "ultyotgy",
      },
      function (err, result) {
        console.log(result);
      }
    );
  }, []);

  return (
    <button onClick= {()=> widgetRef.current.open()}>
      Upload 
    </button>
  )
}
