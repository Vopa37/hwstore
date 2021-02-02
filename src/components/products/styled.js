import styled from "styled-components";
import Theme from "../theme";

export const Button = styled.div`
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
  margin: 2rem auto;
  text-align: center;
`;

export const Title = styled.h4`
  font-weight: 500;
  color: ${Theme.palette.secondaryLight};
`;

export const ImageWrap = styled.div`
  margin: auto;
  padding-top: 5%;
  padding-bottom: 5%;
  height: 50%;
  max-height: 20rem;
  width: 80%;
  max-width: 20rem;
`;

export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius: 1rem;
`;

export const DescriptionText = styled.p`
  font-family: Raleway;
  color: ${Theme.palette.primary};
  font-size: 15px;
  font-weight: 500;
`;

export const MedailonWrap = styled.div`
  background-color: ${Theme.palette.secondary};
  color: white;
  border-radius: 10px;
  height: 20rem;
  transform: scale(1);
  transition-duration: 0.6s;
  @media(max-width: 575px){
    margin: auto;
  }
  @media(min-width: 576px){
    margin: 2rem 0;
  }
  @media(min-width: 992px){
    margin: 2rem;
  }
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.6s;
    cursor: pointer;
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
