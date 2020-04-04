import React from 'react';
import styled from '@emotion/styled'

const Input = styled.input`
transform : scale(1.5);
cursor: pointer;

`

function CheckBox(prps) {

    return (
        <Input type="checkbox" id="checkbox" name="checkbox" />
    );
}

export default CheckBox;
