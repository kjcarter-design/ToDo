import React from "react";
import Avatar from "../icons/avatar.svg";
import Menu from "./Menu";
import styled from "styled-components";

export default function Navbar(props) {
  //Date and Time assets
  function getNewDate() {
    return new Date();
  }
  let fullDate = getNewDate();

  function renderDate(date) {
    return date.toLocaleString("en-us", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  let currentDate = renderDate(fullDate);

  //Component build
  return (
    <NavbarStyled>
      <Avataricon src={Avatar} />
      <Currentdate>{currentDate}</Currentdate>
      <Menu state={props.state} menuClick={props.menuClick}/>
    </NavbarStyled>
  );
}

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
