import styled from 'styled-components';
import React from 'react'
import { ChatBubbleOutline, DarkModeOutlined, FullscreenExit, FullscreenExitOutlined, LanguageOutlined, NotificationsNoneOutlined, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const Navbar = () => {
  return (
    <NavBar>
      <Wrapper>
        <WrapperLeft>
          <input type='text' placeholder="search option" />
          <Search/>
        </WrapperLeft>
        <WrapperRight>
          <Items>
            <LanguageOutlined />
            English
          </Items>
          <Items>
            <DarkModeOutlined />
          
          </Items>

          <Items>
            <FullscreenExitOutlined />
          
          </Items>

          <Items>
            <NotificationsNoneOutlined />
            <p>5</p>
          
          </Items>

          <Items>
            <ChatBubbleOutline />
            <p>8</p>
          
          </Items>

          <Items>
          <Avatar/>
          
          </Items>

        </WrapperRight>
</Wrapper>
    </NavBar>
   
  )
}

export default Navbar;

const NavBar = styled.div`
height:50px;
border-bottom:0.5px solid lightgray;
display: flex;
align-items: center;
color: gray;
font-size: 14px;
width: 100%;

`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
width: 100%;

`;
const WrapperLeft = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:350px;
background-color:white;
padding:3px;
border: 1px solid lightgray;
border-radius: 5px;


>input{
  width: 100%;
 font-size: 14px;
 color: grey;
 outline: none;
 border: none;
 background: transparent;

 ::placeholder{
  font-size: 12px;
 }
 


}
`;




const WrapperRight = styled.div`
display:flex;
align-items: center;
`;

const Items = styled.div`

display:flex;
align-items:center;
margin-right:20px;
position: relative;
cursor: pointer;

>p{
font-size: 10px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight:600;
  position: absolute;
  top:-5px;
  right:-4px;
 
}

>.MuiSvgIcon-root{
  font-size: 20px;
  color: purple;

}
>.MuiAvatar-root{
  font-size: 15px;
}
`;