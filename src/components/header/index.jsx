import React, {useEffect, useState} from "react";
import {
  Root,
  Title,
  DropdownButton,
  DropdownMenu,
  DropdownMenuLink,
  WidthWrapper, Button,UserInfo
} from "./styled";

import Modal from "../modal/";

import HamburgerMenu from "react-hamburger-menu";
import useComponentVisible from "./useComponentVisible";
import { Link } from "gatsby";
import RegForm from "../regform";
import LogForm from "../logform";
import {AnimatePresence} from "framer-motion";
const Header = () => {
    const [reg,setReg] = useState(false);
    const [log,setLog] = useState(false);
    const [user,setUser] = useState(undefined);
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  useEffect(()=>{
      setUser(localStorage.getItem("user"));
  });

    const logOff = () => {
      localStorage.clear();
      setUser(undefined);
    }

  return (
    <Root>
      <WidthWrapper>
      <div>
          <Title>
              Hardware Store
          </Title>
          <Button onClick={()=>{setLog(true)}}>Login</Button>
          <Button onClick={()=>{setReg(true)}}>Registrace</Button>
          {user && <div><UserInfo>Přihlášen jako uživatel: {user}</UserInfo></div>}
        <div ref={ref}>
            <DropdownButton
                onClick={() => setIsComponentVisible(!isComponentVisible)}
            >
                {
                    <HamburgerMenu
                        isOpen={isComponentVisible}
                        menuClicked={false}
                        width={30}
                        height={30}
                        strokeWidth={2}
                        rotate={0}
                        color="#EB5D3E"
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                }
            </DropdownButton>

          {isComponentVisible && (
            <DropdownMenu>
              <DropdownMenuLink href="#Home">
                <Link to="/#Home">Co půjčujeme</Link>
              </DropdownMenuLink>
              <DropdownMenuLink href="#Produkty">
                <Link to="/#Produkty">Produkty</Link>
              </DropdownMenuLink>
              <DropdownMenuLink href="#Formular">
                <Link to="/#Formular">Kontaktujte nás</Link>
              </DropdownMenuLink>
            </DropdownMenu>
          )}
          <AnimatePresence>
            {reg &&
            <Modal toggle={setReg}>
                <RegForm/>
            </Modal>
            }
          </AnimatePresence>
            <AnimatePresence>
            {log &&
            <Modal toggle={setLog}>
                <LogForm/>
            </Modal>
            }
            </AnimatePresence>
        </div>
      </div>
      </WidthWrapper>
    </Root>
  );
};

export default Header;
