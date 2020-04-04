import React from 'react';
import styled from '@emotion/styled';
import H1 from './h1';
import Paragraph from './paragraph';
import Email from './emailsmaller';
import Password from './password';
import Link from './link';
import NoAccount from './noaccount';
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

function LogIn(props) {

    function check() {
        if (!document.getElementById("mail").checkValidity() || document.getElementById("pass").value === "") {
            alert("Not valid")

        } else {
            callMeIfValid();
        }
    }

    function callMeIfValid() {
        alert("You log in")

    }

    return (
        <Container>
            <H1 title="Log In" />
            <Paragraph text="Welcome Back!" />
            <Email id="mail" />
            <Password id="pass" />
            <Link to="/resetpassword" id="forgotpass" text="Forgot password?" />
            <ButtonSmall id="login" text="Log In" onClick={check} />
            <NoAccount to="/" id="linklogin" />


        </Container>
    );
}

export default LogIn;
