export const validate = (name, email, password) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!name){
        errors.name = "Username is required!"
    }
    if(!email){
        errors.email = "Email is required!"
    }
    else if(!regex.test(email)){
        errors.email = "This is not a valid email"
    }
    if(!password){
        errors.password = "Password is required!"
    }
    else if(password.length<5){
        errors.password = "Password must be more than 5 characters"
    }
    else if(password.length>10){
        errors.password = "Password must be less than 10 characters"
    }
    return errors;
}