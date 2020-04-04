import React from 'react';
import styled from '@emotion/styled'

const Input = styled.input`
width: 225px;
height: 45px;
font-size: 1.3em;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin-top: 0px;
background-color: white;
border: 0.5px solid #cdcdcd;
`

function DataPicker(props) {

    return (
        <Input type="date" placeholder="mm/dd/yyyy" id={props.id} />
    );
}

export default DataPicker;
