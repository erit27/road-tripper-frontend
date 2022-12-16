import './UserPermissions.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function UserPermissions({serverUrl}) {
  const [users, setUsers] = useState([])
  const [checkedState, setCheckedState] = useState([]) 
  const navigate=useNavigate();

  useEffect( () => {
    axios
      .get(`${serverUrl}/users`)
      .then((response) => {
        setUsers(response.data)
      })
      .catch()
  }, [])

  useEffect( () => {
    let userState = new Array(users.length).fill(false);
    for (let i=0; i<users.length; i++) {
      if (users[i].access === 'family' || users[i].access ==='admin') {
        userState[i] = true
      } else {
        userState[i] = false
      }
    }
    setCheckedState(userState)
  }, [users])

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => 
      index === position? !item : item
    )
    setCheckedState(updatedCheckedState);
  }

  const handlePermissionSubmit = (event) => {
    event.preventDefault();
    const userPermissionArray= users.map(user=> ({
      username: user.username,
      id: user.id,
      access: user.access,
    }))
    for (let i=0; i<checkedState.length; i++) {
      if (userPermissionArray[i].username === 'henry' || userPermissionArray[i].username === 'eilidhritchie' || userPermissionArray[i].username === 'matthew') {
        userPermissionArray[i].access = 'admin';
        axios
          .put(`${serverUrl}/users/updatepermissions`, userPermissionArray[i])
          .then(() => {console.log('permissions updated for admin')})
          .catch((err) => console.log(err))

      } else {
        if (checkedState[i] === true) {
        userPermissionArray[i].access = 'family';
        axios
          .put(`${serverUrl}/users/updatepermissions`, userPermissionArray[i])
          .then(() => {
        })
          .catch((err) => console.log(err))
      } else if ( checkedState[i] === false) {
        userPermissionArray[i].access = 'public'
        axios
          .put(`${serverUrl}/users/updatepermissions`, userPermissionArray[i])
          .then(() => {
        })
          .catch((err) => console.log(err))
      } else {
        console.log('something went wrong')
      }
      }
    }
    navigate('/')
  }
  
  return ( 
    <>
    <div className="up__wrap">
      <h1 className="up__title">Adjust Permissions</h1>
      <div className="up__subtitle">
        <div className="up__left">Username</div>
        <div className="up__right">Name</div>
      </div>
      <form onSubmit={handlePermissionSubmit}>
      <ul className="up__list">   
        {users.map(({ username, firstName}, index) => {
          return (
            <li key = {index}>
              <div className="up__flex">
                <div className="up__flex--left">
                  <input 
                    type = 'checkbox'
                    id = {`custom-checkbox-${index}`}
                    name = {username}
                    value = {username}
                    checked = {checkedState[index]}
                    onChange = {()=> handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{username}</label>
                </div>
                <div className="up__flex--right">
                  {firstName} 
                </div>
              </div>
              
            </li> 
            
          )
        })}
      </ul>
      <button className='btn up__btn' type='submit'> Save Permissions </button>
      </form>
    </div>
    </>
  )
}