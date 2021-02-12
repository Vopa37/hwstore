import React, {useState,useContext} from "react";
import {Button} from "./styled";
import {CartContext} from "../../pages";

export const prepareItems = (array) => {
    var returnedArray = [];
    var counter = {};

    array.forEach(function(obj) {
        var key = JSON.stringify(obj)
        counter[key] = (counter[key] || 0) + 1
    })

    Object.entries(counter).forEach((item)=>{
        var obj = {
            data:JSON.parse(item[0]),
            count:item[1],
        }
        returnedArray.push(obj);
    })

    return returnedArray;
}

const ShoppingCart = ({toggle}) => {
    const cart = useContext(CartContext).cart;
    const setCart = useContext(CartContext).setCart;

    const [message,setMessage] = useState(undefined);

    return(
        <div className="w-80 m-auto">
            <h1 className="text-center text-white">Košík</h1>
            {message && <p>{message.text}</p>}
            {cart && prepareItems(cart).map((item,index)=>(
                <div className="text-black w-100 bg-white my-4 d-flex rounded-lg" key={index}>
                    <div className="w-50">
                        <p className="text-center m-0 p-0"> <span className="fw-700">ID:</span> {item.data.id}</p>
                        <p className="text-center m-0 p-0"> <span className="fw-700">Název:</span> {item.data.name}</p>
                        <p className="text-center m-0 p-0"> <span className="fw-700">Cena:</span> {item.data.price} Kč</p>
                        <div className="mx-auto my-4 w-100px h-100px ">
                            <img src={item.data.image} className="rounded w-100 h-100"/>
                        </div>
                    </div>

                    <div className="w-50 d-flex flex-column justify-content-center">
                        <p className="text-center m-0 p-0"> <span className="fw-700">Počet v košíku:</span> {item.count}</p>
                    </div>
                </div>
            ))}
            <Button>Odeslat objednávku</Button>
        </div>
    );
}

export default ShoppingCart;