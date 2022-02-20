import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const Center = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
margin-left: 20rem;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  color: grey;
  margin-left: 12rem;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 40px;
  dispaly: flex;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Link to = '/' className="link">  <Logo>Quikai</Logo> </Link>
        </Left>
        <Center>
        <MenuItem>Home </MenuItem>
        <MenuItem>Payment</MenuItem>  
        <MenuItem>Booking</MenuItem>
        <MenuItem>Features</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Pages</MenuItem>
        <Link className="link" to='/register'>  <MenuItem>REGISTER</MenuItem> </Link>
        <Link className="link" to='/login'>  <MenuItem>SIGNIN</MenuItem> </Link>
        </Center>
        <Right>
        
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
