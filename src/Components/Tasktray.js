import React, { Component } from "react";
import Task from "./Task";
import OpenCard from "./OpenCard";
import AddTask from "./AddTaskButton";
import { v4 } from "uuid";
import styled from "styled-components";

const INITIAL_PAGE = "list";
export default class Tasktray extends Component {
  state = {
    tasks: [],
    newTaskTitle: "",
    newTaskDesc: "",
    page: INITIAL_PAGE,
  };

componentDidMount(){

}

componentWillUnmount(){

}


  changePage(pageName) {
    this.setState({ page: pageName });
  }

  handleChangeTaskTitle(event) {
    const value = event.target.value;
    this.setState({ newTaskTitle: value });
  }

  handleChangeTaskDesc(event) {
    let value = event.target.value;
    this.setState({ newTaskDesc: value });
  }

  handleNewTask() {
    this.setState((oldState) => {
      if (oldState.newTaskTitle === "" && oldState.newTaskDesc === "") {
        return;
      }

      let newTask = {
        id: v4(),
        title: oldState.newTaskTitle,
        desc: oldState.newTaskDesc,
        completed: false,
      };
      return {
        tasks: [...oldState.tasks, newTask],
        newTaskTitle: "",
        newTaskDesc: "",
      };
    });

    this.changePage("list");
  }

  delTask = (task) => {
    const newTasks = this.state.tasks.filter(
      (element) => element.id !== task.id
    );
    this.setState({ tasks: newTasks });
  };

  checkboxToggle = (taskToChange) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === taskToChange.id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <TaskrayContainer>
        {" "}
        {this.state.page === "form" && (
          <FormWrapper>
            <FormData>
              <FormInput>
                <InputText>Title:</InputText>
                <input
                  type="text"
                  maxLength="50"
                  name="newTaskTitle"
                  //How to make this input required?
                  placeholder="What do you need to do?"
                  value={this.state.newTaskTitle}
                  onChange={(event) => this.handleChangeTaskTitle(event)}
                  required
                />
              </FormInput>
              <FormInput>
                <InputText>Description:</InputText>
                <input
                  type="text"
                  name="newTaskDesc"
                  placeholder="Tell me more..."
                  maxLength="240"
                  value={this.state.newTaskDesc}
                  onChange={(event) => this.handleChangeTaskDesc(event)}
                />
              </FormInput>
              <ConfirmTaskButton
                type="submit"
                onClick={() => this.handleNewTask()}
              >
                Add Task
              </ConfirmTaskButton>
            </FormData>
          </FormWrapper>
        )}
        {this.state.page === "list" && (
          <>
            <TasktrayStyled>
              {this.state.tasks.map((task) => (
                <Taskcard
                  key={task.id}
                 //onClick={() => this.changePage("openCard")}
                >
                  <Task
                    task={task}
                    onDelete={this.delTask}
                    onToggle={this.checkboxToggle}
                  />
                </Taskcard>
              ))}
            </TasktrayStyled>
            <br />
            <AddTask onClick={() => this.changePage("form")} />
          </>
        )}
        {//this.state.page === "openCard" && (
          
            //<TasktrayStyled>
              //{this.state.tasks.map((task) => (
                //<OpenTask>
                 // <OpenCard  task={task} onClose={() => this.changePage('list')} />
               // </OpenTask>
            //  ))}
           // </TasktrayStyled>
          
      // )
       }
      </TaskrayContainer>
    );
  }
}

const TaskrayContainer = styled.div`
  grid-area: taskTray;
  justify-self: center;
  margin: 0 0 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TasktrayStyled = styled.ul`
  display: flex;
  flex-direction: column;
  box-shadow: gray 0px 1px 4px;
  width: 17rem;
  height: 22rem;
  align-items: center;
  padding: 0.5rem;
  overflow: auto;
`;
const Taskcard = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: gray 0px 1px 4px;
  margin-top: 7rem;
  width: 17rem;
  height: 17rem;
`;

const FormData = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const InputText = styled.p`
  margin-bottom: 0rem;
`;

const FormInput = styled.div`
  padding: 0.5rem;
`;

const ConfirmTaskButton = styled.button`
  background-color: #4caf50;
  color: white;
  width: 5rem;
  height: 2rem;
  border-radius: 0.2rem;
  border: none;
  align-self: center;
  margin-top: 2rem;
`;

const OpenTask = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: gray 0px 1px 4px;
  width: 17rem;
  height: 22rem;
  align-items: center;
  padding: 0.5rem;
  overflow: auto;
`;


//notes
//Need to add OpenCard Functionality but app is done so far as checkpoint