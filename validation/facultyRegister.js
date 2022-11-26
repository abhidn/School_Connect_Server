const Validator = require('validator');
const isEmpty = require('./is-empty');


const validateFacultyRegisterInput = (data) => {
    let errors = {}
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.classroom = !isEmpty(data.classroom) ? data.classroom : '';
    data.designation = !isEmpty(data.designation) ? data.designation : '';
    data.dob = !isEmpty(data.dob) ? data.dob : '';
    data.aadharCard = !isEmpty(data.aadharCard) ? data.aadharCard : '';
    data.facultyMobileNumber = !isEmpty(data.facultyMobileNumber) ? data.facultyMobileNumber : '';


    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.classroom)) {
        errors.classroom = 'classroom field is required';
    }

    if (Validator.isEmpty(data.dob)) {
        errors.dob = 'DOB field is required';
    }
    if (Validator.isEmpty(data.designation)) {
        errors.designation = 'Designation field is required';
    }
    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'gender field is required';
    }
    if (Validator.isEmpty(data.aadharCard)) {
        errors.aadharCard = 'aadharCard field is required';
    }
    if (!Validator.isLength(data.aadharCard, { min: 12, max: 12 })) {
        errors.aadharCard = 'aadharCard Number must be 12 digits';
        
    }
    
    
    if (!Validator.isLength(data.facultyMobileNumber, { min: 10, max: 10 })) {
        errors.facultyMobileNumber = 'facultyMobileNumber Number must be 10 digits';
    }
    if (Validator.isEmpty(data.facultyMobileNumber)) {
        errors.facultyMobileNumber = 'facultyMobileNumber field is required';
    }
    console.log(errors)
    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = validateFacultyRegisterInput