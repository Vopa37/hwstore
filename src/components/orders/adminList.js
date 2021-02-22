import React, {useState,useEffect,useContext} from "react";
import axios from "axios";
import {Button} from "../styled";
import {UserContext} from "../../pages";

const AdminList = () => {
    const [orders,setOrders] = useState(undefined);
    const users = useContext(UserContext).users;
    const completeOrder = (orderId) => {
        axios.put("http://localhost:5000/order/complete",{id:orderId}).then((response)=>{
            console.log(response);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:5000/order/all").then(response => setOrders(response.data));
    }, []);

    const getUser = (userId) => {
       return users.find(user => user._id === userId);
    }

    return(
        <div className="w-80 m-auto">
            <h1 className="text-center text-white">Správa objednávek</h1>
            {orders && orders.map((order,index)=>(
                <div className="bg-white rounded-lg w-80 mx-auto my-6 p-4">
                    <h4 className="text-center">{order._id}</h4>
                    <p className="text-center">Uživatel: {getUser(order.userId).firstname} {getUser(order.userId).lastname}</p>
                    <p className="text-center">Email: {getUser(order.userId).email}</p>
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
                    {!order.completed && <Button className="position-relative mx-0 my-6" style={{left:"50%",transform:"translateX(-50%)"}} onClick={()=>{completeOrder(order._id)}}>Dokončit objednávku</Button>
                    }
                </div>
            ))}
        </div>
    );
}

export default AdminList;