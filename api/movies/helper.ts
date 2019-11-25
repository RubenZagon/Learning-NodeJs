export{}
const isValid = input => (veq, validators) => {
  try {
    return validators.every(validator => validator(input));
  } catch (e) {
    return false;
  }
};

const validateName = input => {
  if (input && input.name) {
    return true;
  }
  throw new Error('Invalid name');
};

const validaMovieTitle = (movie) => {
  if (movie && movie.title) {
    return true;
  }
  throw new Error('Invalid');
};

const isValidMovieToCreate = (body) => body && body.title;

const validateDate = input => {
  if (input && input.date && input.date.getMonth() > 3) {
    // if (input?.date?.getMonth() > 3) {
      return true;
    }
    throw new Error('Invalid date');
  };

module.exports = {
  validateName,

};
