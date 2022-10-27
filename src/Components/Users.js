import React from 'react'
import Table from 'react-bootstrap/Table';
import '../App.css'

const Users = ({ id, name, username, setSelectedUser, setSelectedUserId , active, handleActive }) => {

  const handleClick = (id, name) => {
    setSelectedUserId(id)
    setSelectedUser(name)
  }

  return (
    <>
      <tr className={`${active ? "highlight" : null}`}
      onClick={((e) => handleClick({id}, name),
          handleActive)}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
      </tr>
    </>
  )
}

export default Users
