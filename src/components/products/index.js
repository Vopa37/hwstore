import React, { useState } from "react";
import Medailon from "./medailon";
import Filter from "./filter";
import { resolveImage } from "./imagesresolver";
import {FilterWrap} from "./styled";
const Products = () => {
  const defaultProducts = require("../../products.json");

  const [products, setProducts] = useState(defaultProducts);

  const onSubmitHandler = (values) => {
    setProducts(
      defaultProducts.filter((product) => values[product.type] === true)
    );
  };

  return (
    <div className="container mt-5">
      <FilterWrap className="row">
        <div className="d-block mb-8">
          <Filter onSubmitHandler={onSubmitHandler} className="col-8" />
        </div>
      </FilterWrap>
      <div className="row m-auto">
        {products.map((product) => (
          <Medailon
            type={product.type}
            id={product.id}
            name={product.name}
            price={product.price}
            inch={product.inch}
            image={resolveImage(product.image)}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
