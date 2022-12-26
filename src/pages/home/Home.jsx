import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'

const home = () => {
  return (
    <Home>
      <Sidebar />
      <HomeContainer>
        <Navbar />
        <WidgetsContainer>
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
          
       </WidgetsContainer>
      </HomeContainer>
      
   </Home>
  )
}

export default home;
const Home = styled.div`
display:flex;

`;
const HomeContainer = styled.div`
flex:1;
background-color:aliceblue;
`;

const WidgetsContainer = styled.div`
display:flex;
padding: 20px;
gap:20px;
`;

