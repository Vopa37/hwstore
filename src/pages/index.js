import React, {useState} from "react";

import { Root, Main, MenuTarget } from "../components/styled";

import Header from "../components/header/.";
import Rental from "../components/rental/.";
import Footer from "../components/footer/.";
import Products from "../components/products";

const IndexPage = () => {
    return(
        <Root>
            <MenuTarget id="Home"/>
            <Header/>
            <Rental/>
            <MenuTarget id="Produkty"/>
            <Main>
                <Products/>
            </Main>
            <Footer/>
        </Root>
    );
}

export default IndexPage;
