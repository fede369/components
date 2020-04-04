import React from 'react';
import styled from '@emotion/styled'

const Par = styled.p`
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
font-size: 1em;
margin: 0 10px;
color: #484848;
`

function ParagraphGrey(props) {

    return (
        <Par>{props.text}</Par>
    );
}

export default ParagraphGrey;
