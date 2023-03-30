import React from "react";
import Cards from "./Cards";

import Button from "./Button";
 import classes from "./Error.module.css"



const ErrorModel = (props)=>{
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}>

    <Cards className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className="={classes.actions">
            <Button onClick={props.onConfirm}>okay</Button>

            </footer>
    </Cards>
        </div>

    )
}

export default ErrorModel;