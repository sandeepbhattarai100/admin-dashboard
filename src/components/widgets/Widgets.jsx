import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Widgets = ({ type }) => {
  
  //temporary value
  const amount = 100;
  const diff = 28.4;
  

  let data;

  switch (type) {
    case "user":
      data = {
        title: "users",
        isMoney: false,
        link: "see all users",
        icon: <PersonOutlineIcon />
   
      };
      break;
    
      case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "total available balance",
          icon: <AccountBalanceOutlined />
     
        };
      break;
    
      case "order":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "view total orders",
          icon: <ShoppingBagOutlined />
     
        };
      break;
    
      case "earning":
        data = {
          title: "EARNING",
          isMoney: true,
          link: "View net earnings",
          icon: <MonetizationOnOutlined />
     
        };
        break;
    default:
      break;

  }

  return (
    <Widget>
      <WidgetLeft>
        <Title>
          <span>{data.title}</span>
        </Title>
        <Counter>
          <span>{data.isMoney && "$"}{amount }</span>
        </Counter>
        <Links>
          <span>{ data.link}</span>
        </Links>
      </WidgetLeft>
      <WidgetRight>
        <Percentage className="positive">
          <KeyboardArrowUp/>
          { diff}%
        </Percentage >
        <Icon>{data.icon}</Icon>
      </WidgetRight>
    </Widget>
  );
};

export default Widgets;
const Widget = styled.div`
  display: flex;
  height: 100px;
  flex: 1;
 
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 5px;
  justify-content: space-between;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;
const WidgetLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;`;


const Title = styled.div`

font-weight:600;
color:lightgrey;

`;


const Counter = styled.div`
font-size:28px;
font-weight: 300;
`;
const Links = styled.div`
font-size: 14px;
border-bottom: 0.5px solid lightgray;
width: max-content;
`;


const WidgetRight = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;`;

const Percentage = styled.div`
font-size:14px;
display:flex;
justify-content: center;
align-items: center;
 
&.positive{
  color: green;
}
&.negative{
  color: red;
}

`;
const Icon = styled.div`
font-size:18px;
padding: 2px;
border-radius: 3px;
align-self: flex-end;

`;
