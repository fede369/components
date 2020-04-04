import React from 'react';
import styled from '@emotion/styled'

const Input = styled.input`
width: 400px;
height: 45px;
font-size: 1.3em;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 10px 0;

`

function Password(props) {

    return (
        <Input type="password" placeholder="Password" id={props.id} required />
    );
}

export default Password;
