import React, { useState } from 'react';
import styled from '@emotion/styled';
import H1 from './h1';
import Label from './label';
import LocationSearchInput from './selectWhere';
import DataPicker from './dataPicker';
import SelectAdult from './selectAdult';
import SelectChildren from './selectChildren';
import ButtonLarge from '../elements/buttonLarge';




const Container = styled.div`
height: 500px;
width: 540px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius: 2px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 25px;
margin: auto;
`
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0;
width: 510px;
`

const Column = styled.div`
display: flex;
flex-direction: column;
align-items: left;

`

function BookaPlace() {
    const [address, setAddress] = useState("")

    const handleChange = address => {
        setAddress(address);
    };

    return (
        <Container>
            <H1 title="Find a place to stay and things to do" />
            <Column>
                <Label text="where" />
                <LocationSearchInput value={address} onChange={handleChange} />
            </Column>
            <Row>
                <Column>
                    <Label text="Check-in" />
                    <DataPicker id="checkin" />
                </Column>
                <Column>
                    <Label text="Checkout" />
                    <DataPicker id="checkout" />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Label text="Adults" />
                    <SelectAdult />
                </Column>
                <Column>
                    <Label text="Children" />
                    <SelectChildren />
                </Column>
            </Row>
            <ButtonLarge text="Search" />
        </Container>
    );
}

export default BookaPlace;
