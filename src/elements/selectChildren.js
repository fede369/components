import React from 'react';
import styled from '@emotion/styled'

const Select = styled.select`
width: 225px;
height: 53px;
font-size: 1.3em;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin-top: 10px;
margin: 0 0 10px;
`

function SelectChildren(props) {

    return (
        <Select id="children" defaultValue={'DEFAULT'} >
            <option value="DEFAULT">0 children </option>
            <option value="1">1 child </option>
            <option value="2">2 children</option>
            <option value="3">3 children</option>
            <option value="4">4 children</option>
            <option value="5">5 children</option>
        </Select>
    );
}

export default SelectChildren;
