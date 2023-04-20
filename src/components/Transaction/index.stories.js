import  Transaction  from '.';
import React from 'react';
export default {
  title: 'Example/Transaction',
  component: Transaction,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Income = {
  args: {
   transaction: {
    label: 'some income',
    value: 23
   }
  },
};