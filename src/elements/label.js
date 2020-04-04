import React from 'react';
import styled from '@emotion/styled'

const Uppercase = styled.p`
font-weight: bold;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 0;
text-transform: uppercase;
font-size:1em;
color: rgb(72,72,72);
margin: 20px 0 0;
text-align: left;

`

function Label(props) {

    return (
        <Uppercase>{props.text}</Uppercase>
    );
}

export default Label;
