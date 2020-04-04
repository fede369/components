import React from 'react';
import styled from '@emotion/styled';
import CheckBox from './ckeckbox';
import ParagraphGrey from './paragraphgrey';


const Container = styled.div`
display: flex;
flex-direction: row;

`

function MarketingMessages() {

    return (
        <Container>
            <CheckBox />
            <ParagraphGrey text="I don't want to receive marketing messages." />
        </Container>
    );
}

export default MarketingMessages;
