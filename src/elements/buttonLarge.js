import React from 'react';
import styled from '@emotion/styled'

const ButtonShape = styled.button`
width: 510px;
height: 50px;
font-size: 1.3em;
background-color: rgb(29, 161, 242) ;
color: white;
border: 1px solid transparent;
border-radius: 3px;
cursor: pointer;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;


`

function Button(props) {


    return (
        <ButtonShape id="button" type="submit" onClick={props.onClick}>{props.text}</ButtonShape>
    );
}

export default Button;
