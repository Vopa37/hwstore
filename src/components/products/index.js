import React, {useEffect, useState} from "react";
import Medailon from "./medailon";
import Filter from "./filter";
import { resolveImage } from "./imagesresolver";
import {FilterWrap} from "./styled";
const axios = require("axios");

const Products = () => {

  const [products, setProducts] = useState([]);

    /*useEffect(()=>{
        axios.get("http://localhost:5000/product").then((res)=>{
            setProducts(res.data);
        })
    })*/

  return (
    <div className="container mt-5">
      <div className="row m-auto justify-content-between">
        {products.map((product) => (
          <Medailon
            image={product.image}
            price={product.price}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
