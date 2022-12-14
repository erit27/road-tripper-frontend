import './UserPermissions.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { checkboxClasses } from '@mui/material'

export default function UserPermissions({serverUrl}) {
  const [users, setUsers] = useState([])
  const [checkedState, setCheckedState] = useState([]) 


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
    console.log(userState)
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
    console.log(updatedCheckedState)
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
      if (userPermissionArray[i].username === 'zmoto' || userPermissionArray[i].username === 'eilidhritchie') {
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
  }

  

  return ( 
    <>
    <div className="up__wrap">
      <h1 className="up__title">Adjust Permissions</h1>
      <form onSubmit={handlePermissionSubmit}>
      <ul className="up__list">
        {users.map(({id, access, username, firstName, lastName}, index) => {
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
                    // checked = { (access === 'family' || access === 'admin')? true: checkedState[index]}
                    onChange = {()=> handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{username}</label>
                </div>
                <div className="up__flex--right">
                  {`name: ${firstName}, ${lastName}`}
                </div>
              </div>
            </li> 
          )
        })}
      </ul>
      <button className='btn' type='submit'> Save Permissions </button>
      </form>
    </div>
    </>
  )
}