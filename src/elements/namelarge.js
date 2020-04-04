import React from 'react';
import styled from '@emotion/styled'

const Input = styled.input`
width: 500px;
height: 45px;
font-size: 1.3em;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin-top: 10px;
`

function NameLarge(props) {

  const onchange = () => {
    console.log(document.getElementById("nameLarge").value)
  }
  return (
    <Input type="text" placeholder="Name" id={props.id} required onChange={onchange} />
  );
}

export default NameLarge;
