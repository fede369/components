import React from 'react';
import styled from '@emotion/styled';
import H1 from './h1';
import Paragraph from './paragraph';
import Email from './emailsmaller';
import Link from './link';
import ButtonSmall from './buttonSmall';




const Container = styled.div`
height: 600px;
width: 540px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius: 2px;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px 10px 10px;
margin: auto;
display: flex;

`

function ResetPassword(props) {

    function check() {
        if (!document.getElementById("mail").checkValidity()) {
            alert("Not valid")

        } else {
            callMeIfValid();
        }
    }

    function callMeIfValid() {
        alert("Email sent")

    }

    return (
        <Container>
            <H1 title="Reset password" />
            <Paragraph text="A rest link will be sent to your inbox!" />
            <Email id="mail" />
            <ButtonSmall id="reset" text="Send reset link" onClick={check} />
            <Link to="/login" id="goback" text="Go back" />

        </Container>
    );
}

export default ResetPassword;
