import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";


const LinkButton = styled(NavLink)`
font-size: 1.2em;
color: #2a6df4;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 0;
font-weight: bold;
`

function Link(props) {

    return (
        <LinkButton to={props.to} id={props.id} >{props.text}</LinkButton>
    );
}

export default Link;
