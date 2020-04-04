import React from 'react';
import styled from '@emotion/styled';
import Link from './link';
import Paragraph from '../elements/paragraph';


const Container = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
margin: 5px 0 20px 0;

`

function YesAccount(props) {

    return (
        <Container>
            <Paragraph text="Already have an account?" />
            <Link to={props.to} id={props.id} text="Log In" />
        </Container>
    );
}

export default YesAccount;
