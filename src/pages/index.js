import React, {useState} from "react";

import { PageRoot, Main, MenuTarget } from "../components/styled";

import Header from "../components/header/.";
import Rental from "../components/rental/.";
import Footer from "../components/footer/.";
import Products from "../components/products";

const IndexPage = () => {
    return(
        <PageRoot>
            <MenuTarget id="Home"/>
            <Header/>
            <MenuTarget id="Produkty"/>
            <Main>
                <Products/>
            </Main>
            <Footer/>
        </PageRoot>
    );
}

export default IndexPage;
