import React from 'react';
import styled from '@emotion/styled'

const Title = styled.h1`
font-weight: bold;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 0;
`

function H1(props) {

    return (
        <Title>{props.title}</Title>
    );
}

export default H1;
