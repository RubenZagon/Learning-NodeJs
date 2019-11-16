const validateName = require('../helper').validateName;

describe('helper', () => {
  describe('validateName', () => {
    test('should return true if the name is not empty', () => {
      expect(validateName({ name: 'asd' })).toBeTruthy();
    });

    test('should return an exception when the name is empty', () => {
      expect(() => validateName({ name: '' })).toThrow();
    });
  });
});
