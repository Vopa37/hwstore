import styled from "styled-components";
import Theme from "../theme";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Root = styled.div`
  width: 100%;
  color: ${Theme.palette.basicInverse};
  height: 80px;
  position: fixed;
  top: 0;
  background-color: ${Theme.palette.primary};
  z-index: 2;
  padding: 10px;
`;

export const WidthWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;

export const Title = styled.h1`
  color: ${Theme.palette.secondaryLight};
  text-align: center;
  font-size: 1rem;
  @media screen and (min-width: 992px) {
    font-size: 1.4rem;
  }
  font-weight: bold;
`;

export const StyledImg = styled.div`
  float: left;
  height: 30px;
  width: 30px;
  @media screen and (min-width: 992px) {
    height: 50px;
    width: 50px;
    margin: 7px;
  }
  margin: 12px;
`;

export const DropdownButton = styled.button`
  background-color: ${Theme.palette.primary};
  border: none;
  float: right;
  height: 30px;
  width: 30px;
  @media screen and (min-width: 992px) {
    height: 50px;
    width: 50px;
    margin: 7px;
  }
  margin-right: 12px;
  padding: 10px;
`;

export const DropdownMenu = styled.div`
  width: 160px;
  background-color: ${Theme.palette.secondaryLight};
  visibility: ${(props) => props.visibility};
  float: right;
  margin-top: 26px;
  @media screen and (min-width: 992px) {
    margin-top: 10px;
  }
  border-radius: 30px;
`;

export const DropdownMenuLink = styled(AnchorLink)`
  * {
    color: ${Theme.palette.primary};
    display: block;
    padding: 5px;
    margin: 5px;
    &:hover {
      color: ${Theme.palette.primary};
      background-color: #ffa500;
    }
    font-weight: bold;
    border-radius: 30px;
  }
`;
