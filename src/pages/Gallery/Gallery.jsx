import './Gallery.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import BodyTemplate from '../../components/BodyTemplate/BodyTemplate';
import Photos from '../../components/Photos/Photos';

export default function Gallery({serverURL}) {
  return (
    <>

      <Photos serverURL={serverURL}/>
    </>
  )
}