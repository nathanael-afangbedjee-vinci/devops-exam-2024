// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    
    test('should return true if gamerTag length have atleast 8 characters', () => {
        expect(isValid('MoreThanEigth')).toBe(true);
    });

    test('should return false if gamerTag length is under 8 characters', () => {
        expect(isValid('length')).toBe(false);
    });

    test('should return true if gamerTag contains special characters', () => {
        expect(isValid('gamerTag$')).toBe(true);
    });
    
});