import React from 'react'
import styled from "styled-components";
import Sidebar from '../sidebar/Sidebar';
import User from '../user/User';



const Container = styled.div`
  flex: 1;
`;

function Dashboard() {
  return (
    <Container>
        <Sidebar />
        <User />
    </Container>

  )
}

export default Dashboard