import React, { useState } from 'react'
import AddUser from './components/Users/AddUser';
import './App.css';
import UserList from './components/Users/UserList';

const App= ()=>{
  const[userList,SetUserList]=useState([])

  const addUserHandler = (uName,uAge)=>{
    SetUserList((prevUsersList)=>{

      return[...prevUsersList,{name:uName,age:uAge,id:Math.random().toString() },];
    });
  }
  return (
    <>
    <div>
     <AddUser onAddUser={addUserHandler}/>
     <UserList users={userList}/>
    </div>
    </>
  )
}

export default App;
