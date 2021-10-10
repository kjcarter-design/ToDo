import React from "react";
import Delete from "../icons/delete.svg";

import styled from "styled-components";

export default function Task(props) {
  return (
    <TaskCard>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.onToggle(props.task)}
      />
      <TaskTitle s showStrikeThrough={props.task.completed}>
        {props.task.title}
      </TaskTitle>
      <DeleteButton onClick={() => props.onDelete(props.task)}>
        <img src={Delete} alt="delete task button" />
      </DeleteButton>
    </TaskCard>
  );
}

const TaskCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 15rem;
  height: 3rem;
  box-shadow: gray 0px 1px 4px;
`;

const TaskTitle = styled.p`
  font-weight: 700;
  overflow: hidden;
  width: 15ch;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  ${(props) =>
    props.showStrikeThrough
      ? "text-decoration: line-through; color: green;"
      : ""};
`;

const DeleteButton = styled.button`
  justify-content: center;
  background-color: white;
  border: none;
`;
