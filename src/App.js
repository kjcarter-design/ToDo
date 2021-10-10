import React, { Component } from "react";
import Tasktray from "./Components/Tasktray";
import Navbar from "./Components/Navbar";

import styled from "styled-components";
import MenuIcon from "./icons/menuicon.svg";
import Avatar from "./icons/avatar.svg";
import Clock from "./Components/Clock";

const DASHBOARD = "dashboard";
export default class App extends Component {
  state = {
    user: "Kevin",
    page: DASHBOARD,
    date: this.renderDate(this.getNewDate()),
  };

  getNewDate() {
    return new Date();
  }

  renderDate(date) {
    return date.toLocaleString("en-us", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  changePage = (pageName) => {
    this.setState({ page: pageName });
  };

  render() {
    return (
      <AppWrapper>
        
        {this.state.page === "dashboard" && (
          <>
            <Navbar state={this.state} menuClick={this.changePage} />
            <Header>Let's get some work done, {this.state.user}</Header>
            <Tasktray />
          </>
        )}
        {this.state.page === "menu" && (
          <MenuWrapper>
            <NavbarStyled>
              <Avataricon src={Avatar} />
              <Currentdate>{this.state.date}</Currentdate>
              <MenuButton onClick={() => this.changePage("dashboard")}>
                <Menuimg src={MenuIcon} />
              </MenuButton>
            </NavbarStyled>

            <div>
              <MenuItemList>
                <MenuItem>
                  <h1 onClick={() => this.changePage("dashboard")}>
                    Dashboard
                  </h1>
                </MenuItem>
                <MenuItem>
                  <h1>Profile</h1>
                </MenuItem>
                <MenuItem>
                  <h1>Settings</h1>
                </MenuItem>
              </MenuItemList>
            </div>
          </MenuWrapper>
        )}
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 2fr;
  grid-template-areas:
    "navbar"
    "header"
    "taskTray";
`;

const Header = styled.h2`
  grid-area: header;
  align-self: center;
  justify-self: center;
  text-align: center;
  width: 13rem;
`;

const NavbarStyled = styled.nav`
  grid-area: navbar;
  box-shadow: gray 0px 1px 10px;
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  grid-template-areas: "avatar date menu";
  justify-items: space-evenly;
  align-items: center;
`;

const Avataricon = styled.img`
  grid-area: avatar;
  justify-self: center;
  align-self: center;
  height: 2.5rem;
`;

const Currentdate = styled.h1`
  grid-area: date;
  justify-self: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuButton = styled.button`
  grid-area: menu;
  justify-content: center;
  background-color: white;
  border: none;
`;

const Menuimg = styled.img`
  height: 2.5rem;
`;

const MenuItemList = styled.ul`
  list-style: none;
  overflow: hidden;
`;

const MenuItem = styled.li`
  margin: 5rem 0rem;
  &:hover {
    text-decoration: underline;
  }
`;
