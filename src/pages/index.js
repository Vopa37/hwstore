import React, {useEffect, useState} from "react";

import { PageRoot, MenuTarget } from "../components/styled";

import Header from "../components/header/.";
import Footer from "../components/footer/.";
import Products from "../components/products";
import axios from "axios";


export const ProductsContext = React.createContext();
export const CartContext = React.createContext();

const IndexPage = () => {
    const [cart,setCart] = useState([]);
    const [products, setProducts] = useState(undefined);

    useEffect(()=>{
        axios.get("http://localhost:5000/product").then((res)=>{
            setProducts(res.data);
        });
    },[]);

    return(
        <ProductsContext.Provider value={{products:products,setProducts:setProducts}}>
            <CartContext.Provider value={{cart:cart,setCart:setCart}}>
                <PageRoot>
                    <MenuTarget id="Home"/>
                        <Header/>
                    <MenuTarget id="Produkty"/>
                        <Products/>
                    <Footer/>
                </PageRoot>
            </CartContext.Provider>
        </ProductsContext.Provider>
    );
}

export default IndexPage;
