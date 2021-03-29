import React, {useState} from "react";
import {SmallOrderWrapper} from "./styled";
import {AnimatePresence} from "framer-motion";
import Modal from "../modal";
import OrderLarge from "./orderlarge";
const OrderSmall = ({order,user,completeOrder}) => {
    const [orderDetail,setOrderDetail] = useState(undefined);
    return(
        <>
            <SmallOrderWrapper onClick={()=>{setOrderDetail({order,user})}}>
                <p>id : <span className="font-weight-900">{order._id}</span></p>
                {user && <p>uživatel : <span className="font-weight-900">{user.username}</span></p>}
                <p>stav : <span className="font-weight-900" style={{color:order.completed?"green":"red"}}>{order.completed ? "Dokončená" : "Probíhá"}</span></p>
            </SmallOrderWrapper>
            <AnimatePresence>
                {orderDetail &&
                <Modal toggle={setOrderDetail}>
                        <OrderLarge data={orderDetail} completeOrder={completeOrder} setOrderDetail={setOrderDetail}/>
                </Modal>
                }
            </AnimatePresence>
        </>
    )
}

export default OrderSmall;
