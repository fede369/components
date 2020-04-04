import React from 'react';
import styled from '@emotion/styled';
import Link from './link';
import ParagraphGrey from './paragraphgrey';


const Container = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;

`

function NoAccount(props) {

    return (
        <Container>
            <ParagraphGrey text="Don't have any account?" />
            <Link to={props.to} id={props.id} text="Sign In" />
        </Container>
    );
}

export default NoAccount;
