import React, {useState,useContext} from "react";
import {Button} from "../styled";
import {CartContext} from "../../pages";
import Modal from "../modal";
import {AnimatePresence} from "framer-motion";

export const prepareItems = (array) => {
    var returnedArray = [];
    var counter = {};

    if(array != null){
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
    }
    else{
        return null;
    }

    return returnedArray;
}

const OrdersList = ({data}) => {
    return(
        <div className="w-80 m-auto">
            <h1 className="text-center text-white">Mé objednávky</h1>
            {data && data.map((order,index)=>(
                <div className="bg-white rounded-lg w-80 mx-auto my-6 p-4">
                    <h4 className="text-center">{order._id}</h4>
                    <p className="text-center">Stav: {order.completed ? <span style={{color:"green"}}>Vyřízená</span> : <span style={{color:"red"}}>Probíhá</span>}</p>
                    {order.items.map((item)=>(
                        <div className="my-4 text-center item-bordered">
                            <p>{item.data[0].name}</p>
                            <div className="w-30 m-auto">
                                <img src={item.data[0].image}/>
                            </div>
                            <p>Počet kusů v objednávce: {item.count}</p>
                            <p>Cena za kus: {item.data[0].price} Kč</p>
                            <p>Celková cena za tento produkt: {item.data[0].price * item.count} Kč</p>
                        </div>
                    ))}
                    <p className="text-center my-4 font-size-20">Celková cena objednávky: <span className="text-underline">{order.price} Kč</span></p>
                </div>
            ))}
        </div>
    );
}

export default OrdersList;