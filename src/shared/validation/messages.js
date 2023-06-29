const VALIDATION_MESSAGES = {
  required_mes: 'This field is required',
  name_mes: {
    size: 'Name should contain 2-60 characters',
    format: 'Invalid name format e.g John, Aria Mercer',
  },
  email_mes: {
    size: 'Email should contain 2-100 characters',
    format: 'Invalid email format e.g jhon@example.com',
  },
  phone_mes: {
    format: 'Invalid phone format. It should start with "+380"',
  },
  photo_mes: {
    format: 'The photo must be in JPEG/JPG format',
    size: 'The photo size must not exceed 5 MB',
    dimentions: 'Minimum photo size required: 70x70 pixels',
  },
};

export const { required_mes, name_mes, email_mes, phone_mes, photo_mes } =
  VALIDATION_MESSAGES;
