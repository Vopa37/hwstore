import React, {useContext,useState} from "react";
import {Button} from "../styled";
import {CartContext} from "../../pages";

const ProductInfo = ({price,description,name,id,image}) => {
    const setCart = useContext(CartContext).setCart;
    const cart = useContext(CartContext).cart;

    const addToCart = (id,name,price,image) => {
        const newCart = cart.concat({id:id,name:name,price:price,image:image});
        setCart(newCart);
        localStorage.setItem("cart",JSON.stringify(newCart));
    }

    const [message,setMessage] = useState(undefined);
    const [dissabled,setDissabled] = useState(false);
    return(
        <>
            <div className="text-white w-50 h-80 m-auto fw-600">
                <img className="my-8 rounded-lg" src={image}/>
                <p className="text-center font-weight-100 "><span className="font-weight-900">Název:</span> {name}</p>
                <p className="text-center font-weight-100 "><span className="font-weight-900">Cena:</span> {price} Kč</p>
                <p className="text-center font-weight-100 "><span className="font-weight-900">Popis:</span> {description}</p>
                <Button className="position-relative mx-0" style={{left:"50%",transform:"translateX(-50%)"}} onClick={()=>{
                    !dissabled && addToCart(id,name,price,image);
                    !dissabled && setMessage(`${name} přídán do košíku`);
                    !dissabled && setDissabled(true);
                }}>
                    Do košíku
                </Button>
            </div>
            {message && (
                <div>
                    <p className="text-white text-center">{message}</p>
                    <p className="d-none">{setTimeout(()=>{setMessage(undefined);setDissabled(false)},3000)}</p>
                </div>
            )}
        </>
    );
}

export default ProductInfo;