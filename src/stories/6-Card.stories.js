import React from 'react';
import SignIn from '../elements/SignIn';
import LogIn from '../elements/LogIn';
import ResetPassword from '../elements/resetPassword';
import { MemoryRouter } from 'react-router-dom';
import Newsletter from '../elements/newsletter';
import BookaPlace from '../elements/bookadate';





export default {
    title: 'Card',
    component: SignIn
};

export const Card_SignIn = () => {
    return (
        <MemoryRouter>
            <SignIn />
        </MemoryRouter>
    )
}

export const Card_LogIn = () => {
    return (
        <MemoryRouter>
            <LogIn />
        </MemoryRouter>
    )
}

export const Card_ResetPassword = () => {
    return (
        <MemoryRouter>
            <ResetPassword />
        </MemoryRouter>
    )
}

export const Card_Newsletter = () => <Newsletter />

export const Card_BookAPlace = () => <BookaPlace />