// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];

    if(gamerTag.length >= 8) return true;
    for (let i = 0; i < specialCharacters.length; i++) {
        if (gamerTag.includes(specialCharacters[i])) {
            return true;
        }
    }
    return false;
};

exports.isValid = isValid;

