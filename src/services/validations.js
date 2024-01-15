// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];

    
    for (let i = 0; i < specialCharacters.length; i++) {
        if (gamerTag.length >= 8 && gamerTag.includes(specialCharacters[i])) {
            return true;
        }
    }

    for (let i = 0; i < 10; i++) {
        if (gamerTag.length >= 8 && (gamerTag[i])) {
            return true;
        }
    }
    return false;
};

exports.isValid = isValid;

