import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar,  styled } from "@mui/material";

const Header = styled(AppBar)`
 background: #111111;
`
const Tabs = styled(NavLink)`
 font-size:18px;
 margin-right: 20px;
 color : inherit;
 text-decoration: none;
 `
const NavBar = () =>{
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to='/'>Code for job</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add Usres</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;