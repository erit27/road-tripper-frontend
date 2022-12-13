import './Settings.scss'
import UserPermissions from '../../components/UserPermissions/UserPermissions'
import UploadMedia from '../../components/UploadMedia/UploadMedia'

export default function Settings({serverUrl, loggedIn}) {
  return (
    <>
      <div className="settings__wrap">
        <h1 className='settings'>Settings</h1>
        <UploadMedia />
        <UserPermissions serverUrl={serverUrl}/>
      </div>
    </>
  )
}