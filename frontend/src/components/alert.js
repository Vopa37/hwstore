import React from "react";
import {Status} from "./styled";
const Alert = ({message,setMessage}) => {
    return(
        <div className="py-8 mx-12">
            <Status error={message.error}>{message.text}</Status>
            <p className="d-none">{setTimeout(()=>{setMessage(undefined)},2000)}</p>
        </div>
    );
}

export default Alert;