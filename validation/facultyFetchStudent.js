
const Validator = require('validator');
const isEmpty = require('./is-empty');


const validateFetchStudentsInput = (data) => {
    let errors = {}
    data.classroom = !isEmpty(data.classroom) ? data.classroom : '';
    data.year = !isEmpty(data.year) ? data.year : '';
    data.division = !isEmpty(data.division) ? data.division : '';


    if (Validator.isEmpty(data.classroom)) {
        errors.classroom = 'classroom field is required';
    }

    if (Validator.isEmpty(data.year)) {
        errors.year = 'Year field is required';
    }

    if (Validator.isEmpty(data.division)) {
        errors.division = 'division field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = validateFetchStudentsInput