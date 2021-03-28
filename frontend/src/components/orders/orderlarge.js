import React, {useState} from "react";
import {Button} from "../styled";
import Modal from "../modal";
import {AnimatePresence} from "framer-motion";
import Alert from "../alert";

const OrderLarge = ({data,completeOrder,setOrderDetail}) => {
    const [orderComplete,setOrderComplete] = useState(undefined);
    return(
        <div className="bg-white rounded-lg w-80 mx-auto my-6 p-4">
            {data.user &&
            <>
                <p className="text-center">Uživatel: {data.user.firstname} {data.user.lastname}</p>
                <p className="text-center">Email: {data.user.email}</p>
            </>
            }
            <p className="text-center">Stav: {data.order.completed ? <span style={{color:"green"}}>Vyřízená</span> : <span style={{color:"red"}}>Probíhá</span>}</p>
            {data.order.items.map((item,index)=>(
                <div className="my-4 text-center item-bordered" key={index}>
                    <p>{item.data[0].name}</p>
                    <div className="w-30 m-auto">
                        <img src={item.data[0].image} alt={item.data[0].image}/>
                    </div>
                    <p>Počet kusů v objednávce: {item.count}</p>
                    <p>Cena za kus: {item.data[0].price} Kč</p>
                    <p>Celková cena za tento produkt: {item.data[0].price * item.count} Kč</p>
                </div>
            ))}
            <p className="text-center my-4 font-size-20">Celková cena objednávky: <span className="text-underline">{data.order.price} Kč</span></p>
            {data.user && !data.order.completed && <Button className="position-relative mx-0 my-6" style={{left:"50%",transform:"translateX(-50%)"}} onClick={()=>{setOrderComplete({text:"Objednávka dokončena",error:false}); setTimeout(()=>{setOrderComplete(undefined);completeOrder(data.order._id,setOrderDetail);},2000)}}>Dokončit objednávku</Button>}
            <AnimatePresence>
                {orderComplete &&
                <Modal toggle={setOrderComplete}>
                    <Alert message={orderComplete} setMessage={setOrderComplete}/>
                </Modal>
                }
            </AnimatePresence>
        </div>

    )
}

export default OrderLarge;