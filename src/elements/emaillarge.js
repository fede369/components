import React from 'react';
import styled from '@emotion/styled'

const Input = styled.input`
width: 500px;
height: 45px;
font-size: 1.3em;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 10px 0;

`

function EmailLarge(props) {

    return (
        <Input type="mail" placeholder="user@example.com" id={props.id} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
    );
}

export default EmailLarge;
