import React from 'react';
import styled from '@emotion/styled'

const Link = styled.a`
font-size: 0.8em;
color: #6D6D6D;
font-family: "Roboto", "Ubuntu", "Helvetica Neue", sans-serif;
margin: 20px 0;
`

function Unsubscribe() {

    return (
        <Link href="%unsubscribe%">Unsubscribe here</Link>
    );
}

export default Unsubscribe;
