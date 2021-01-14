import styled from "styled-components";
import Theme from "../theme";

export const Button = styled.button`
  background-color: ${Theme.palette.primary};
  color: ${Theme.palette.secondaryLight};
  border-radius: 20px;
  width: 40%;
  height: 30px;
  border: 1px solid black;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Title = styled.h4`
  font-weight: 500;
  color: ${Theme.palette.secondaryLight};
`;

export const ImageWrap = styled.div`
  margin: auto;
  padding-top: 5%;
  padding-bottom: 5%;
  height: 60%;
  width: 80%;
`;

export const Image = styled.img`
    width:100%;
    height:100%;
`

export const DescriptionText = styled.p`
  font-family: Raleway;
  color: ${Theme.palette.primary};
  font-size: 15px;
  font-weight: 500;
`;

export const MedailonWrap = styled.div`
  background-color: rgba(44, 27, 70, 0.8);
  border-radius: 10px;
  margin-bottom: 20px;
  margin: 0 2rem;
  height: 20rem;
  &:hover {
    background-color: rgba(44, 27, 70, 1);
  }
`;

export const FilterLabel = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  color: #fec82f;
  margin: 0;
  margin-top: 4px;
`;

export const MedailonTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const Form = styled.form`
    display:flex;
    @media(max-width:992px){
    display:block;
    }
`;

export const FilterWrap = styled.div`
    margin: auto;
    display:flex;
    justify-content:flex-end;
    
    @media(max-width:992px){
    justify-content:center;
    }
`;
