import React from 'react';
import H1 from '../elements/h1';
import Paragraph from '../elements/paragraph';
import Link from '../elements/link';
import ParagraphGrey from '../elements/paragraphgrey';
import Unsubscribe from '../elements/unsubscribe';
import Label from '../elements/label';
import { MemoryRouter } from 'react-router-dom';





export default {
  title: 'Text',
  component: H1
};

export const Title_H1 = () => <H1 title="Title" />

export const Text_paragraph = () => <Paragraph text="Paragraph" />

export const Text_paragraph_grey = () => <ParagraphGrey text="Paragraph" />

export const Text_link = () => {
  return (
    <MemoryRouter>
      <Link id="linksignin" text="Link" to="/login" />
    </MemoryRouter>
  )
}

export const Link_unsubscribe = () => <Unsubscribe />;

export const Text_Label = () => <Label text="Label" />



