import React from 'react';
import styled from '@emotion/styled'

const Par = styled.p`
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
font-size: 1.3em;
margin: 0 10px 5px;

`

function Paragraph(props) {

    return (
        <Par>{props.text}</Par>
    );
}

export default Paragraph;
