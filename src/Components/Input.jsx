import React from 'react';
import styled from 'styled-components';



function Input() {

    const Input = styled.input.attrs(props => ({
     
        type: "text",
        placeholder: "Search",
        size: props.size || "1em",
      }))`
        /* color: #828282; */
        font-size: 16px;
        width:15rem;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        border-radius: 10px;
        border:#828282;
      
      `;
  return (
    <>
  <Input></Input>

    </>
  )
}

export default Input