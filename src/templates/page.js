import React from "react";
import { graphql } from "gatsby";
import Description from "../components/products/description";
import { resolveImage } from "../components/products/imagesresolver";
import { Root } from "../components/styled";
import Header from "../components/header";
import Footer from "../components/footer";

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      image
      type
      name
      price
      description {
        procesor
        ram
        gpu
        storage
        display
        interface
        diagonal
        resolution
        monitortype
        frequency
        delay
        outputs
        format
        contrast
        lamp
        servicelife
      }
    }
  }
`;

const productsPage = ({ data }) => {
  const product = data.productsJson;
  return (
    <>
      <Root>
        <Header />
        <Description
          image={resolveImage(product.image)}
          description={product.description}
          name={product.name}
          type={product.type}
        />
        <Footer />
      </Root>
    </>
  );
};

export default productsPage;
