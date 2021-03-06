import React from "react";
import Lottie from "react-lottie";
import animationData from "../animation/LottieLetter.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function UncontrolledLottie() {
    return (
        <Lottie options={defaultOptions} height={110} width={250} />
    );
}

export default UncontrolledLottie;
