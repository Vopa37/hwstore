import React, {useState} from "react";
import { Image, ImageWrap, MedailonWrap, MedailonTitle } from "./styled";
import Modal from "../modal";
import {AnimatePresence} from "framer-motion";
import ProductInfo from "./productinfo";


const Medailon = ({ name, image, price, description, id }) => {
    const [isOpen,setOpen] = useState(false);
  return (
      <>
      <MedailonWrap className="col-7 col-sm-5 col-lg-3 mb-2" onClick={()=>{setOpen(true)}}>
        <ImageWrap>
          <Image src={image}/>
        </ImageWrap>
        <MedailonTitle>{name}</MedailonTitle>
          <p>{`${price} Kč`}</p>
      </MedailonWrap>
          <AnimatePresence>
              {isOpen &&
              <Modal toggle={setOpen}>
                  <ProductInfo name={name} price={price} description={description} id={id}/>
              </Modal>
              }
          </AnimatePresence>
      </>
  );
};

export default Medailon;
