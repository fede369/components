import React from 'react';
import NameSmaller from '../elements/namesmaller';
import Email from '../elements/emailsmaller';
import NameLarge from '../elements/namelarge';
import EmailLarge from '../elements/emaillarge'
import Password from '../elements/password';
import CheckBox from '../elements/ckeckbox';
import MarketingMessages from '../elements/marketingmessages';
import NoAccount from '../elements/noaccount';
import YesAccount from '../elements/yesaccount';
import { MemoryRouter } from 'react-router-dom'



export default {
  title: 'Input',
  component: NameSmaller,
};

export const Input_Small_Name = () => <NameSmaller placeholder="Name" id="firstname" />;

export const Input_Large_Name = () => <NameLarge />;

export const Input_Small_Email = () => <Email id="mail" />;

export const Input_Large_Email = () => <EmailLarge />;

export const Input_Password = () => <Password id="pass" />;

export const CheckBox_Message = () => <CheckBox />;

export const CheckBox_and_Text = () => <MarketingMessages />;

export const NoAccount_SignIn = () => {
  return (
    <MemoryRouter>
      <NoAccount to="/signin" />
    </MemoryRouter>
  )
}

export const YesAccount_LogIn = () => {
  return (
    <MemoryRouter>
      <YesAccount to="/login" />
    </MemoryRouter>
  )
}
