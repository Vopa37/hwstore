import React from "react";
import {Button} from "./shoppingcart/styled";
const Confirm = ({title,accept,decline}) => {
    return(
        <div>
            <h2 className="text-white text-center my-8">{title}</h2>
        <div className="d-flex align-content-center ">
            <Button onClick={accept}>Ano</Button>
            <Button onClick={decline}>Ne</Button>
        </div>
        </div>
    );
}

export default Confirm;