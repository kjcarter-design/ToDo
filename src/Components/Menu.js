import React from "react";
import Menuicon from "../icons/menuicon.svg";
import styled from "styled-components";

export default function Menu(props) {



  return (
    <Menubutton onClick={() => props.menuClick('menu')}>
      <Menuimg src={Menuicon} />
    </Menubutton>
  );
}

const Menubutton = styled.button`
  grid-area: menu;
  justify-self: center;
  align-self: center;
  background-color: white;
  border: none;
`;

const Menuimg = styled.img`
  height: 2.5rem;
`;
