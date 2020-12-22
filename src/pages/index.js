import React from "react";

import { Root, Main, MenuTarget } from "../components/styled";

import Header from "../components/header/.";
import Rental from "../components/rental/.";
import Footer from "../components/footer/.";
import Formular from "../components/form/.";
import Products from "../components/products";
import TextLine from "../components/textline";

const IndexPage = () => (
  <Root>
    <MenuTarget id="Home" />
    <Header />

    <Main>
      <Rental />
    </Main>

    <TextLine
      onLineText="Půjčujeme tyto stroje"
      textcolor="#FEC82F"
      linecolor="#EB5D3E"
      animationStart="0.06"
      animationEnd="0.29"
      lightType={true}
    />

    <MenuTarget id="Produkty" />
    <Main>
      <Products />
    </Main>

    <TextLine
      onLineText="Kontaktujte nás!"
      underLineText="Ceny stanovujeme individuálně, kontaktujte nás pro bližší info!"
      textcolor="#1A1449"
      linecolor="#1A1449"
      animationStart="0.73"
      animationEnd="0.94"
      lightType={false}
    />

    <MenuTarget id="Formular" />
    <Main>
      <Formular />
    </Main>

    <Footer />
  </Root>
);

export default IndexPage;
