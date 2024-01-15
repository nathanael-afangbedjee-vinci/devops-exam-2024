// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });

    test('should return true if the gamertag is valid', () => {
        const result = isValid('123456789');
        expect(result).toBe();
    });    
});

