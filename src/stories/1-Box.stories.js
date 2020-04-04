import React from 'react';

import Success from '../elements/success';
import NotIncorrect from '../elements/notcorrect';

export default {
    title: 'Text Box',
    component: Success, NotIncorrect
};

export const Box_Success = () => <Success display="flex" />;

export const Box_NotIncorrect = () => <NotIncorrect show="flex" />