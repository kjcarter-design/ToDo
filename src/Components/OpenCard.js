import React from "react";
import styled from "styled-components";
import Close from "../icons/close.svg";

export default function OpenCard(props) {
  return (
    <TaskCard>
      <CloseButton onClick={() => props.onClose()}>
        <img alt="close" src={Close} />
      </CloseButton>
      <h1>{props.task.title}</h1>
      <br />
      <h3>{props.task.desc}</h3>
    </TaskCard>
  );
}

const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: gray 0px 1px 4px;
  width: 17rem;
  height: 22rem;
  align-items: center;
  padding: 0.5rem;
  overflow: auto;
`;

const CloseButton = styled.button`
  justify-self: flex-end;
  align-self: flex-end;
  background-color: white;
  border: none;
`;
