// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    return gamerTag.length >= 8;
};

exports.isValid = isValid;

