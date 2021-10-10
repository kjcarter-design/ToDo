import React from "react";
import styled from "styled-components";

export default function AddTask(props){


    return(
        <ButtonWrapper>
            <Button type='submit' value='Add Task' onClick={()=> props.onClick()} />
        </ButtonWrapper>
    )
}

 const ButtonWrapper = styled.div`
 align-self: center;
 `;

 const Button = styled.input`
 background-color: #4CAF50;
 color: white;
 width: 5rem;
 height: 2rem;
 border-radius: .2rem;
 border: none;
 `;