import React from "react";
import Theme from "../theme";
import {Button} from "./styled";
import cart from "../../images/cart.png";

const ProductInfo = ({price,description,name,id}) => {
    return(<div className="text-white w-50 h-80 m-auto fw-600">
        <p className="text-center">{name}</p>
        <p className="text-center">Cena: {price}</p>
        <p className="text-center">{description}</p>
        <p className="text-center">{id}</p>
        {localStorage.getItem("user") &&
        <Button>Do košíku</Button>
        }
    </div>);
}

export default ProductInfo;