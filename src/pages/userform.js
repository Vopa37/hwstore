import React from "react";

import { Root, MenuTarget } from "../components/styled";

import Header from "../components/header/.";
import UserForm from "../components/userform";
import Footer from "../components/footer/.";


const UserFormPage = () => (
    <Root>
        <MenuTarget id="Home" />
        <Header />
        <UserForm />
        <Footer />
    </Root>
);

export default UserFormPage;
