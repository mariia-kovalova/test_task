import { nanoid } from '@reduxjs/toolkit';

export const inputs = ['name', 'email', 'phone', 'position_id', 'photo'];

export const fields = [
  {
    id: nanoid(),
    type: 'text',
    inputName: 'name',
    label: 'Your name',
    placeholder: 'Your name',
    helperText: '',
  },
  {
    id: nanoid(),
    type: 'email',
    inputName: 'email',
    label: 'Email',
    placeholder: 'Email',
    helperText: '',
  },
  {
    id: nanoid(),
    type: 'tel',
    inputName: 'phone',
    label: 'Phone',
    placeholder: 'Phone',
    helperText: '+38 (XXX) XXX - XX - XX',
  },
];

export const upload = {
  id: nanoid(),
  inputName: 'photo',
  label: 'Upload',
  placeholder: 'Upload your photo',
  helperText: '',
};
