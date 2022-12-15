import './Settings.scss'
import UserPermissions from '../../components/UserPermissions/UserPermissions'
import UploadMedia from '../../components/UploadMedia/UploadMedia'
import NewPost from '../../components/NewPost/NewPost'

export default function Settings({serverUrl, loggedIn, user}) {
  console.log(user)
  return (
    <>
      <div className="settings__wrap">
        <h1 className='settings'>Settings</h1>
        <UploadMedia />
        <UserPermissions serverUrl={serverUrl}/>
        <NewPost serverUrl={serverUrl} user={user}/>
      </div>
    </>
  )
}