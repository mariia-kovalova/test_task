import { nanoid } from '@reduxjs/toolkit';

export const inputs = ['name', 'email', 'phone', 'position_id', 'photo'];

export const fields = [
  {
    id: nanoid(),
    type: 'text',
    inputName: 'name',
    label: 'Your name',
    placeholder: 'Your name',
    helper_text: '',
  },
  {
    id: nanoid(),
    type: 'email',
    inputName: 'email',
    label: 'Email',
    placeholder: 'Email',
    helper_text: '',
  },
  {
    id: nanoid(),
    type: 'tel',
    inputName: 'phone',
    label: 'Phone',
    placeholder: 'Phone',
    helper_text: '+38 (XXX) XXX - XX - XX',
  },
];
