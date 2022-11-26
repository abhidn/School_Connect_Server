const Validator = require('validator');
const isEmpty = require('./is-empty');


const validateStudentRegisterInput = (data) => {
    let errors = {}
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.classroom = !isEmpty(data.classroom) ? data.classroom : '';
    data.division = !isEmpty(data.division) ? data.division : '';
    data.dob = !isEmpty(data.dob) ? data.dob : '';
    data.year = !isEmpty(data.year) ? data.year : '';
    // data.gender = !isEmpty(data.gender) ? data.gender : '';
    // data.studentMobileNumber = !isEmpty(data.studentMobileNumber) ? data.studentMobileNumber : 0;
    // data.fatherMobileNumber = !isEmpty(data.fatherMobileNumber) ? data.fatherMobileNumber : 0;
    data.fatherName = !isEmpty(data.fatherName) ? data.fatherName : '';


  
    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }
    if (!Validator.isLength(data.fatherName, { min: 2, max: 30 })) {
        errors.fatherName = 'Name must be between 2 and 30 characters';
    }
   

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
   

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    // errr
    


    // err
    if (Validator.isEmpty(data.classroom)) {
        errors.classroom = 'classroom field is required';
    }

    if (Validator.isEmpty(data.year)) {
        errors.year = 'Year field is required';
    }

    if (Validator.isEmpty(data.division)) {
        errors.division = 'division field is required';
    }

    if (Validator.isEmpty(data.dob)) {
        errors.dob = 'DOB field is required';
    }
    
    if(!Validator.isLength(data.studentMobileNumber, { min: 10, max: 10 })) {
        errors.studentMobileNumber = 'student Mobile Number must be 10 digits';
    }
    
    if(!Validator.isLength(data.fatherMobileNumber, { min: 10, max: 10 })) {
        errors.fatherMobileNumber = 'Father Mobile Number must be 10 digits';
    }

    if (Validator.isEmpty(data.studentMobileNumber)) {
        errors.studentMobileNumber = 'studentMobileNumber field is required';
    }
    if (Validator.isEmpty(data.fatherMobileNumber)) {
        errors.fatherMobileNumber = 'fatherMobileNumber field is required';
    }
    if (Validator.isEmpty(data.fatherName)) {
        errors.fatherName = 'fatherName field is required';
    }
    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'gender field is required';
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = 'name field is required';
    }

    if (!Validator.isLength(data.aadharCard, { min: 12, max: 12 })) {
        errors.aadharCard = 'aadharCard Number must be 12 digits';
    }
    if (Validator.isEmpty(data.aadharCard)) {
        errors.aadharCard = 'aadharCard field is required';
    }
    console.log(errors)
    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = validateStudentRegisterInput