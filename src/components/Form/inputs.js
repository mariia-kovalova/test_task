import { nanoid } from '@reduxjs/toolkit';

export const inputs = ['name', 'email', 'phone', 'position', 'photo'];

export const fields = [
  {
    id: nanoid(),
    type: 'text',
    inputName: 'name',
    label: 'Your name',
    placeholder: 'Your name',
  },
  {
    id: nanoid(),
    type: 'email',
    inputName: 'email',
    label: 'Email',
    placeholder: 'Email',
  },
  {
    id: nanoid(),
    type: 'tel',
    inputName: 'phone',
    label: 'Phone',
    placeholder: 'Phone',
  },
];
