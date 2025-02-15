export const validate = (values) => {
    const errors = {};
    
    if (!values.email) {
        errors.email = 'Please enter valid email address.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    
    if(!values.name){
        errors.name = "Please enter your name."
    }else if (values.name.length < 3 ){
        errors.name = 'Name must be at least 3 characters long.'
    }else if (values.name.length > 50) {
        errors.name = 'Name cannot be longer than 50 characters.';
    }
    
    if (!values.message){
        errors.message = "Please enter your comment"
    }
      
    return errors;
};