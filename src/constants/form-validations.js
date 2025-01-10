const messages = {
  text: {
    required: 'This field is required',
    wrong: 'Only letters and spaces'
  },
  email: {
    required: 'This field is required',
    wrong: 'Enter an email valid'
  },
  query: {
    required: 'Please select a query type'
  },
  consent: {
    required: 'To submit this form, please consent to being contacted.'
  }
};

const patterns = {
  onlyLetters: /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/,
  email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
};

const textValidation = {
  required: messages.text.required,
  pattern: {
    value: patterns.onlyLetters,
    message: messages.text.wrong
  }
};

const emailValidation = {
  required: messages.text.required,
  pattern: {
    value: patterns.email,
    message: messages.email.wrong
  }
};

const queryValidation = {
  required: messages.query.required
};

const consentValidation = {
  required: messages.consent.required
};

export const FORM_VALIDATIONS = {
  NAME: textValidation,
  SURNAME: textValidation,
  EMAIL: emailValidation,
  QUERY: queryValidation,
  CONSENT: consentValidation
};
