import React, {useState} from "react";
import LogForm from "../logform";
import RegForm from "../regform";
import Modal from "../modal";
import ManageUsers from "../manageusers";
import {AnimatePresence} from "framer-motion";
import {isEmpty} from "gatsby/dist/schema/infer/inference-metadata";

const countOrderPrice = (data) => {

    let orderPrice = 0;

    data.map((item)=>{
        orderPrice += (item.count*item.data.price);
    })

    return orderPrice;
}

const countCartItems = (data) => {

    let totalItems = 0;

    data.map((item)=>{
        totalItems += item.count;
    })

    return totalItems;
}

const OrderSummary = ({data}) => {
    const [reg,setReg] = useState(false);
    const [log,setLog] = useState(true);

    const user = JSON.parse(localStorage.getItem("user"));

    if(data.length > 0){
    return localStorage.getItem("user") ? (
        <div>
            <h1 className="text-white text-center mb-8">Shrnutí objednávky</h1>
            <p className="text-white text-center" >Celková cena objednávky {countOrderPrice(data)} Kč </p>
            <p className="text-white text-center" >Celkový počet zboží v objednávce: {countCartItems(data)} </p>
            <div className="my-8">
                <h2 className="text-white text-center mb-8" >Informace o uživateli</h2>
                <p className="text-white text-center" >Jméno: {user.firstname}</p>
                <p className="text-white text-center" >Příjmení: {user.lastname}</p>
                <p className="text-white text-center" >Email: {user.email}</p>
            </div>
            {data.map((item)=>(
                <div className="bg-white d-flex my-8 w-80 mx-auto rounded-lg">
                    <div className="w-50 text-center">
                        <p className="my-4">{item.data.name}</p>
                        <p className="my-4">{item.data.price} Kč</p>
                    </div>
                    <div className="w-50 text-center d-flex flex-column justify-content-center">
                        <p>Počet: {item.count}</p>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div>
            <p className="text-white text-center">Abyste mohli odeslat objednávku, musíte se <a className="text-black-50 cursor-pointer"onClick={()=>{setReg(false); setLog(true)}}>příhlásit</a>/<a className="text-black-50 cursor-pointer" onClick={()=>{setLog(false); setReg(true)}}>zaregistrovat</a></p>
                {log &&
                    <LogForm toggle={setLog}/>
                }
                {reg &&
                    <RegForm toggle={setReg}/>
                }
        </div>
    );
    }else{
        return(<p className="text-center text-white">Košík je prázdný</p>)
    }
}

export default OrderSummary;