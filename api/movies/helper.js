const validateName = input => {
  if (input && input.name) {
    return true;
  }
  throw new Error('Invalid name');
};

module.exports = {
  validateName
};
