import React from "react";
import {
  Root,
  Title,
  StyledImg,
  DropdownButton,
  DropdownMenu,
  DropdownMenuLink,
  WidthWrapper,
} from "./styled";

import HamburgerMenu from "react-hamburger-menu";
import useComponentVisible from "./useComponentVisible";
import { Link } from "gatsby";
import Image from "../optimizeMyImg";

const Header = () => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  return (
    <Root>
      <WidthWrapper>
        <a href="/">
          <StyledImg>
            <Image
              alt="Prorocketeers logo"
              filename="prorocketeers_rocket.png"
            />
          </StyledImg>
        </a>

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
       
          <Title>
            ProRocketeers Rental - Půjčovna profesionálních strojů
          </Title>
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
        </div>
      </WidthWrapper>
    </Root>
  );
};

export default Header;
