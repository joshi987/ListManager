import React, { useState } from "react";

import Cards from '../UI/Cards';
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModal";


const AddUser = (props)=>{
    const [enteredUsername,setEnterUsername]=useState('')
    const [enterAge,setEnterAge]=useState('')
    const[error,setError]=useState();


    const addUserHandler = (event)=>{
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enterAge.trim().length === 0) {
            setError({
                title:'Invalid Input',
                message:'Please enter a valid name and age (non-empty values).',
            });
            return;
        }

        if(+enterAge < 1){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age (>0)',
            });
            return;
        }

        props.onAddUser(enteredUsername,enterAge);

        setEnterUsername('');
        setEnterAge('');

    }

const usernameChangeHandler = (event)=>{
    setEnterUsername(event.target.value)
    
}
const ageChangeHandler = (event)=>{
    setEnterAge(event.target.value)
}
const erroHandler =()=>{
    setError(null);
}


return(
    <>
    <div>

    <div>

      {error && <ErrorModel title={error.title} message={error.message} onConfirm={erroHandler}  />}
       <Cards className={classes.input}>

        <form onSubmit={addUserHandler}>
            <label htmlFor="">Username</label>
            <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age </label>
            <input type="number" value={enterAge} id="age" onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
       </Cards>
    </div>
    </div>
    
    </>
    
)
};
export default AddUser;