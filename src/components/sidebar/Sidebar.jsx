import React from 'react'
import styled from 'styled-components';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Top>
               <span>Sandy</span>
            </Top>
            <hr/>
            <Center>
                <ul>
                    <p>MAIN</p>
                    <li><DashboardIcon /><span>Dashboard</span></li>
                    <p>LISTS</p>
                    <li><PersonIcon/><span>Users</span></li>
                    <li><StoreIcon/><span>Products</span></li>
                    <li><CreditCardIcon/><span>Others</span></li>
                    <li><LocalShippingIcon /><span>Delivery</span></li>
                    <p>USEFUL</p>
                    <li><InsertChartIcon/><span>Stats</span></li>
                    <li><NotificationsNoneIcon /><span>Notifications</span></li>
                    <p>SERVICE</p>
                    <li><SettingsSystemDaydreamOutlinedIcon/><span>System Health</span></li>
                    <li><PsychologyOutlinedIcon/><span>User Logs</span></li>
                    <li><SettingsApplicationsIcon /><span>Settings</span></li>
                    <p>USER</p>
                    <li><AccountCircleOutlinedIcon/><span>Profile</span></li>
                    <li><ExitToAppIcon/><span>Logout</span></li>
                </ul>
            </Center>
            <Bottom>
                <ColorOption></ColorOption>
                <ColorOption></ColorOption>
            </Bottom>
      </SidebarContainer>
 
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
flex:0.1;
border-right:0.5px solid lightgrey;
min-height: 100vh;
background-color: white;

>hr{
height:0;
border: 0.5px solid rgb(230,227,227);
}
`;
const Top = styled.div`
height:50px;
display:flex;
justify-content:center;
align-items:center;

>span{
 font-size: 20px;
 font-weight:600;
 color:purple;
}`;
const Center = styled.div`
padding-left:10px;

>ul{
    list-style: none;
    margin: 0;
    padding: 0;

    >p{
        font-size: 10px;
        font-weight: bold;
        color: grey;
        margin-top: 15px;
        margin-bottom: 5px;
    }
    >li{
        display: flex;
        align-items: center;
        padding: 5px;
        cursor: pointer;

        > span{
            font-weight: 600;
            font-size: 13px;
            color: grey;
            margin-left: 10px;
        }

        &:hover{
        background-color:aliceblue;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
    > .MuiSvgIcon-root{
        font-size: 15px;
        color: #7451f8;
    }

    }
   

        
}
`;
const Bottom = styled.div`
display: flex;
align-items: center;
margin: 10;


`;
const ColorOption = styled.div`
height:20px;
width: 20px;
border-radius: 5px;
border: 1px solid purple;

margin-left: 20px;
margin-top: 15px;
cursor: pointer;

&:nth-child(1){
    background-color: white;
}
&:nth-child(2){
    background-color: darkgrey;
}
`;
