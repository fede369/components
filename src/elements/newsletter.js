import React, { useState } from 'react';
import styled from '@emotion/styled';
import UncontrolledLottie from './animation';
import H1 from './h1';
import Paragraph from './paragraph';
import NameLarge from './namelarge';
import EmailLarge from './emaillarge';
import ButtonLarge from './buttonLarge';
import Unsubscribe from './unsubscribe';
import Success from './success';
import NotCorrect from './notcorrect'


const Container = styled.div`
height: 600px;
width: 540px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
border-radius: 2px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px 10px 10px;
margin: auto;

`

function Newsletter() {
    const [display, setDisplay] = useState("none");
    const [show, setShow] = useState("none")

    function check() {
        if (!document.getElementById("email").checkValidity() || document.getElementById("name").value === "") {
            setShow("flex")
            setDisplay("none");

        } else {
            callMeIfValid();
        }
    }

    function callMeIfValid() {
        setDisplay("flex");
        setShow("none");
    }


    return (
        <Container>
            <UncontrolledLottie />
            <H1 title="Join our newsletter" />
            <Paragraph text="Get our monthly recap with the latest news, articles and resources." />
            <NameLarge id="name" />
            <EmailLarge id="email" />
            <ButtonLarge text="Subscribe" onClick={check} />
            <Success display={display} />
            <NotCorrect show={show} />
            <Unsubscribe />
        </Container>
    );
}

export default Newsletter;
