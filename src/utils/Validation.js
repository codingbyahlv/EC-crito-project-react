//validate email field - format xxx?@x?.x?
export const validateEmail = (value) => {
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
};

//validate name field - format small/big characters/whitespace/-
export const validateName = (value) => {
  const regex = /^[a-zA-Z_-\s]{2,}$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
};

//validate message field - format more than 3 letters
export const validateMessage = (value) => {
  if (value.length < 3) {
    return false;
  }
  return true;
};
