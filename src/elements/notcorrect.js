import React from 'react';
import styled from '@emotion/styled'

const Box = styled.div`
width: 510px;
height: 50px;
background-color: rgba(216, 0, 12, 0.4);
color: rgb(216, 0, 12);
border: 1px solid transparent;
border-radius: 3px;
display: ${props => props.show};
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px 0;

`

const NotCorrectShape = styled.p`
font-size: 1.3em;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 0;
text-align: center;
`

function NotCorrect(props) {


    return (
        <Box show={props.show} >
            <NotCorrectShape>✗ Ooops, something went wrong!</NotCorrectShape>
        </Box>
    );
}

export default NotCorrect;
