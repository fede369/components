import React from 'react';
import styled from '@emotion/styled';
import H1 from './h1';
import YesAccount from './yesaccount';
import NameSmaller from './namesmaller';
import Email from './emailsmaller';
import Password from './password';
import MarketingMessages from './marketingmessages';
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

function SignIn(props) {

    function check() {
        if (!document.getElementById("mail").checkValidity() || document.getElementById("firstname").value === "" || document.getElementById("lastname").value === "" || document.getElementById("pass").value === "") {
            alert("Not valid")

        } else {
            callMeIfValid();
        }
    }

    function callMeIfValid() {
        alert("You sign in")

    }

    return (
        <Container>
            <H1 title="Sign In" />
            <YesAccount id="linklogin" to='/login' />
            <NameSmaller placeholder="First Name" id="firstname" />
            <NameSmaller placeholder="Last Name" id="lastname" />
            <Email id="mail" />
            <Password id="pass" />
            <MarketingMessages />
            <ButtonSmall id="signin" text="Sign In" onClick={check} />


        </Container>
    );
}

export default SignIn;
