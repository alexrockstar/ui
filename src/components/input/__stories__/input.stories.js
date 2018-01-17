/* @flow */
import React from 'react';

import Input from '../input';

export const examples = [
  {
    title: 'Input',
    description: 'A basic input',
    render: () => <Input placeholder="Your first name" />,
  },
  {
    title: 'Disabled Input',
    description:
      "An input that is disabled and doesn't allow user manipulation",
    render: () => <Input placeholder="Your twitter handle" disabled={true} />,
  },
  {
    title: 'Readonly Input',
    description: 'An input that is readonly',
    render: () => <Input readonly={true} value="Project 101" />,
  },
  {
    title: 'Sizing',
    description: 'Inputs can be one of three sizes',
    render: () => (
      <span>
        <Input value="Small input" size="small" />
        <br />
        <Input value="Medium input" size="medium" />
        <br />
        <Input value="Large input" size="large" />
      </span>
    ),
  },
  {
    title: 'With addon before',
    description:
      'Inputs can have addons to display contextual hints to the user',
    render: () => <Input size="medium" addonPrefix="$" placeholder="0.00" />,
  },
  {
    title: 'With addon after',
    description: 'Likewise, inputs can have addons after the main input',
    render: () => (
      <Input size="medium" addonSuffix="kalohq.com" placeholder="0.00" />
    ),
  },
];