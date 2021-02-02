import React, {useState, useEffect} from "react";
import axios from "axios";
import {Button} from "./styled";
import Modal from "../modal";
import {AnimatePresence} from "framer-motion";
import ItemForm from "../itemform";

const ManageProducts = ({toggle}) => {
    const [products,setProducts] = useState(undefined);
    const [message,setMessage] = useState(undefined);
    const [productForm,setProductForm] = useState(false);


    useEffect(()=>{
        axios.get('http://localhost:5000/product').then((res)=>{
            setProducts(res.data);
        });
    },[])

    const deleteProduct = (id) => {
        axios.get('http://localhost:5000/product/remove',{params:{id:id}}).then((res)=>{
            setMessage(res.data);
        });
    }


    return(
        <div className="w-80 m-auto">
            <h1 className="text-center text-white">Správa produktů</h1>
                <Button onClick={()=>{setProductForm(true)}}>Přidat produkt</Button>
                <AnimatePresence>
                    {productForm &&
                    <Modal toggle={setProductForm}>
                        <ItemForm/>
                    </Modal>
                    }
                </AnimatePresence>
            { products && products.map((product,index)=>(
                <div className="text-black w-100 bg-white my-4 d-flex" key={index}>
                    <div className="w-50">
                        <p className="text-center m-0 p-0"> <span className="fw-700">ID:</span> {product._id}</p>
                        <p className="text-center m-0 p-0"> <span className="fw-700">Název:</span> {product.name}</p>
                        <p className="text-center m-0 p-0"> <span className="fw-700">Cena:</span> {product.price}</p>
                        <div className="mx-auto my-4 w-100px h-100px ">
                        <img src={product.image} className="rounded w-100 h-100"/>
                        </div>
                    </div>

                    <div className="w-50 d-flex flex-column justify-content-center">
                        <Button className="w-50 m-auto" onClick={()=>{deleteProduct(product._id)}}>Odstranit produkt</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ManageProducts;