import React from 'react';
import styled from '@emotion/styled'

const Box = styled.div`
width: 510px;
height: 50px;
background-color: rgba(75,181,67, 0.3) ;
color: rgb(75,181,67);
border: 1px solid transparent;
border-radius: 3px;
display: ${props => props.display};
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px 0;

`

const SuccessShape = styled.p`
font-size: 1.3em;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 0;
text-align: center;
`

function Success(props) {


    return (
        <Box display={props.display} >
            <SuccessShape>✔ Success! Welcome aboard, friend!</SuccessShape>
        </Box>
    );
}

export default Success;
