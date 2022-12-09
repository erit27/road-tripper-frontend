import './Settings.scss'
import UserPermissions from '../../components/UserPermissions/UserPermissions'
import UploadMedia from '../../components/UploadMedia/UploadMedia'

export default function Settings({serverURL, loggedIn}) {
  return (
    <>
      <div className="settings__wrap">
        <h1 className='settings'>Settings</h1>
        <UploadMedia />
        <UserPermissions serverURL={serverURL}/>
      </div>
    </>
  )
}