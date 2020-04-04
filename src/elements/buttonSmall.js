import React from 'react';
import styled from '@emotion/styled'

const ButtonShape = styled.button`
width: 410px;
height: 50px;
font-size: 1.3em;
background-color: rgb(29, 161, 242) ;
color: white;
border: 1px solid transparent;
border-radius: 3px;
cursor: pointer;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 15px;

`

function ButtonSmall(props) {


    return (
        <ButtonShape id={props.id} type="submit" onClick={props.onClick}>{props.text}</ButtonShape>
    );
}

export default ButtonSmall;
