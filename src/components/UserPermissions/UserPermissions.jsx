import './UserPermissions.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { checkboxClasses } from '@mui/material'
import { useRef } from 'react'

export default function UserPermissions({serverURL}) {
  const [users, setUsers] = useState([])
  const [checkedState, setCheckedState] = useState([]) 

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => 
      index === position? !item : item
    )
    setCheckedState(updatedCheckedState);
  }

  // const handlePermissionSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .put()
  //     .then()
  //     .catch((err))
  // }

  useEffect( () => {
    axios
      .get(`${serverURL}/users`)
      .then((response) => {
        setUsers(response.data)
      })
      .catch()
  }, [])

  useEffect( () => {
    console.log(`users:`, users)
    const userState = new Array(users.length).fill(false);
    setCheckedState(userState)
  }, [users])

  useEffect ( () => {
    console.log(checkedState)
  }, [checkedState])

 
  return ( 
    <>
    <div className="up__wrap">
      <h1 className="up__title">Adjust Permissions</h1>
      <form >
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