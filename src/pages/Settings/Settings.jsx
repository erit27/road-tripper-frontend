import './Settings.scss'
import UserPermissions from '../../components/UserPermissions/UserPermissions'

export default function Settings({serverURL, loggedIn}) {
  return (
    <>
      <div className="settings__wrap">
        <h1 className='settings'>Settings</h1>
        <UserPermissions serverURL={serverURL}/>
      </div>
    </>
  )
}