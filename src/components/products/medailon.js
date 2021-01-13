import React from "react";
import { Image, ImageWrap, MedailonWrap, MedailonTitle } from "./styled";


const Medailon = ({ name, image, price }) => {
  return (
      <MedailonWrap className="col-12 col-lg-3 mb-2">
        <ImageWrap>
          <Image src={image}/>
        </ImageWrap>
        <MedailonTitle>{name}</MedailonTitle>
          <p>{`${price} Kč`}</p>
      </MedailonWrap>
  );
};

export default Medailon;
