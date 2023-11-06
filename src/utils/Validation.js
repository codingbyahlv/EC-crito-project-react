//validate email field - format xxx?@x?.x?
export const validateEmail = (value) => {
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
};
