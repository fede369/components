import React from 'react';
import styled from '@emotion/styled'

const Select = styled.select`
width: 225px;
height: 53px;
font-size: 1.3em;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 0 0 10px;

`

function SelectAdult(props) {

    return (
        <Select id="adults" defaultValue={'DEFAULT'}>
            <option value="DEFAULT">1 adult</option>
            <option value="2">2 adults</option>
            <option value="3">3 adults</option>
            <option value="4">4 adults</option>
            <option value="5">5 adults</option>
            <option value="6">6 adults</option>
            <option value="7">7 adults</option>
            <option value="8">8 adults</option>
            <option value="9">9 adults</option>
            <option value="10">10 adults</option>
            <option value="11">11 adults</option>
            <option value="12">12 adults</option>
            <option value="13">13 adults</option>
            <option value="14">14 adults</option>
            <option value="15">15 adults</option>
            <option value="16">16 adults</option>
        </Select>
    );
}

export default SelectAdult;
