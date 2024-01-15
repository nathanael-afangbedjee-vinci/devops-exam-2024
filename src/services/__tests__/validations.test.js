// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    
    test('should return true if gamerTag length have atleast 8 characters', () => {
        expect(isValid('MoreThanEigth')).toBe(true);
    });

    test('should return false if gamerTag length is under 8 characters', () => {
        expect(isValid('length')).toBe(false);
    });

    test('should return true if gamerTag contains special characters and have atleast 8 characters', () => {
        expect(isValid('gamerTag$')).toBe(true);
    });

    test('should return true if gamerTag contains special characters and have atleast 8 characters and have atleast 1 number', () => {
        expect(isValid('gamerTag$1')).toBe(true);
    });
    
});