import React from "react";

import Cards  from "../UI/Cards";

import classes from './UserList.module.css'


 
const UserList = (props)=>{
    return (
       <Cards className ={classes.users}>

           <ul>
           {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old)
            </li>
           ))}
           </ul>
       </Cards>
        );
};

export default UserList;