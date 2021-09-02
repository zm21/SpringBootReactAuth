function validationFields(items) {
    let errors = {};
    if(items.username.trim() == '')
    {
        errors = {
            ...errors,
            username: "Username is empty!"
        };
    }

    if(items.password.trim() == '')
    {
        errors = {
            ...errors,
            password: "Password is empty!"
        };
    }
    return errors;
}

export {validationFields};