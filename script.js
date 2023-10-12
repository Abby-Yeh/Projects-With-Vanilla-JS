const form = document.getElementById('from');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show error message - input
function showError(input,message){
    const formControl = input.parentElement;
    // parentElement is div
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success message - input
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email address is valid or not
function isvaildEmail(email){
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(String(email).toLocaleLowerCase());
}

// Event listeners
//form.addEventListener();
form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value  ===''){
        showError(username,'Username is required');
    }else{
        showSuccess(username);
    }
    if(email.value  ===''){
        showError(email,'Email address is required');
    }else if(isvaildEmail(email.value)){
        showError(email,'Not a valid email address');
    }else{
        showSuccess(email);
    }
    if(password.value  ===''){
        showError(password,'Password is required');
    }else{
        showSuccess(password);
    }
    if(password2.value  ===''){
        showError(password2,'Enter your password');
    }else{
        showSuccess(password2);
    }

});