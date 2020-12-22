import React from "react";
import { Image as StyledImage, MedailonWrap, MedailonTitle } from "./styled";
import { Link } from "@reach/router";
import Image from "../optimizeMyImg";

const Medailon = ({ id, name, image }) => {
  return (
    <Link to={`/product/${id}`} className="col-12 col-lg-3 mb-2">
      <MedailonWrap>
        <StyledImage>
          <Image alt={"Img " + id + "."} filename={image} />
        </StyledImage>
        <MedailonTitle>{name}</MedailonTitle>
      </MedailonWrap>
    </Link>
  );
};

export default Medailon;
