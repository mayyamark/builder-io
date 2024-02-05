'use client';
import { Builder } from '@builder.io/react';
import Counter from './components/Counter/Counter';
import Heading from './components/Heading/Heading';

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
  {
    name: 'initialCount',
    type: 'number',
  },
  ],
});

Builder.registerComponent(Heading, {
  name: 'Heading',
  inputs: [
  {
    name: 'title',
    type: 'string',
  },
  ],
});