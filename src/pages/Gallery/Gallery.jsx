import './Gallery.scss';
import Photos from '../../components/Photos/Photos';

export default function Gallery({serverUrl}) {
  return (
    <div className='gallery__wrapper'>
      <Photos serverUrl={serverUrl}/>
    </div>
  )
}