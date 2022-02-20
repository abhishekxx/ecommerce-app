import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { RightOutlined } from "@ant-design/icons";


const Container = styled.div`
  display: flex;
  background-color: #0c2f55 !important;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
  font-size: 15px;

`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: normal;
  margin-left: 12rem;

`;


const Right = styled.div`
  flex: 1;
  padding: 30px;
  color: white;
  font-size: 8px;
  margin-left: 30rem;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

function Header() {
  return (
    <Container>
    <Left>
    <Title>My Profile</Title>      
    </Left>
    
    <Right>
      <Title>Home <RightOutlined /> My Profile</Title>
    </Right>
  </Container>
  )
}

export default Header