import * as feed from './feed.js';
import {userActions} from './userActions.js';

export function login(apiUrl) {
    const modal = document.getElementById("loginModal");
    const loginb = document.getElementById("login");
    const modalClose = document.getElementsByClassName("close")[0];
    const loginSubmit = document.getElementById("loginSubmit");
    
    // opening login modal when clicking login button    
    loginb.addEventListener('click', (event) => {
        modal.style.display = "block";                           
    });
    // closing login modal when clicking close button
    modalClose.addEventListener('click', (event) => {
        modal.style.display = "none";                          
    });    
    // closing login modal when clicking outside login modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }      
    });  
    // clicking submit button
    const loginForm = document.forms.login;
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = loginForm.elements.loginUsername.value;
        const password = loginForm.elements.loginPassword.value;  

        validatePassword(apiUrl + '/auth/login', {"username": username,"password": password})
        .then(data => {
            let validate = JSON.stringify(data);
            if (username === '' || password === '') {
                errorMessage("Please enter a username and password", "errorlogin");
                console.log(validate+"empty");
            } else if (validate === '{"message":"Invalid Username/Password"}') {
                errorMessage("Invalid Username/Password", "errorlogin");
                console.log(validate+"invalid");
            } else {
                errorMessage("Login successful", "errorlogin");
                console.log(validate+"success");
                
                const token = validate.substr(10, 64);
                console.log(token);
                // change feed for logged in users
                tokenCheck(apiUrl + "/user/feed", token)  
                .then(data => {
                    console.log(data);
                    let oldPost = document.getElementById("post");
                    oldPost.parentNode.removeChild(oldPost);
                    feed.feedType(data)
                    modal.style.display = "none";
                    // logged in as USER
                    let oldLoggedInAs = document.getElementById("loggedInAs");
                    oldLoggedInAs.parentNode.removeChild(oldLoggedInAs);
                    let loggedInAsDiv = document.getElementById("loggedInAsDiv");
                    let loggedInAs = document.createElement("p");
                    loggedInAs.setAttribute("id", "loggedInAs");
                    let loggedInUser = document.createTextNode("Logged in as u/" + username);
                    loggedInAs.appendChild(loggedInUser);
                    loggedInAsDiv.appendChild(loggedInAs);
                }); 
                // after logging in, allow user actions
                userActions(apiUrl);
            }
        });
    });
}

export function signup(apiUrl) {
    const modal = document.getElementById("signupModal");
    const signupb = document.getElementById("signup");
    const modalClose = document.getElementsByClassName("close")[1];
    const signupSubmit = document.getElementById("signupSubmit");
    
    // opening login modal when clicking login button    
    signupb.addEventListener('click', (event) => {
        modal.style.display = "block";                           
    });
    // closing login modal when clicking close button
    modalClose.addEventListener('click', (event) => {
        modal.style.display = "none";                          
    });    
    // closing login modal when clicking outside login modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }      
    });  
    // clicking submit button
    const signupForm = document.forms.signup;
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = signupForm.signupUsername.value;
        const password1 = signupForm.signupPassword1.value;
        const password2 = signupForm.signupPassword2.value;
        const fullName = signupForm.signupFullName.value;
        const email = signupForm.signupEmail.value;
        
        validatePassword(apiUrl + '/auth/signup', {"username": username,
                                                   "password": password1,
                                                   "email": email,
                                                   "name": fullName})
        .then(data => {
            const validate = JSON.stringify(data); 
            if (username === '' || password1 === '' || password2 === '') {
                errorMessage("Please fill all fields", "errorsignup");
                console.log(validate+"not all fields entered");
            } else if (password1 !== password2) {
                errorMessage("Passwords don't match", "errorsignup");
                console.log(validate+"invalid");
            } else if (validate === '{"message":"Username Taken"}'){
                errorMessage("Username already taken", "errorsignup");
                console.log(validate+"Taken");
            } else {
                errorMessage("Account created", "errorsignup");
                console.log(validate+"success");
            }
        });
    });
}

// updating error message
function errorMessage(error, id) {
    let formNum = 0;
    if (id === "errorsignup") {
        formNum = 1;
    }
    
    // delete old error message
    let oldErrorp = document.getElementById(id);
    oldErrorp.parentNode.removeChild(oldErrorp);
    // create and append new error message                    
    let form = document.getElementsByClassName("form");
    let errorp = document.createElement("p");
    errorp.setAttribute("id", id);
    if (error === "Login successful" || error === "Account created") {
        errorp.setAttribute("class", "greenText");
    } else {
        errorp.setAttribute("class", "redText");
    }
    let errormsg = document.createTextNode(error);
    errorp.appendChild(errormsg);
    form[formNum].appendChild(errorp);
}

// validating username and password
function validatePassword(url = '', data = {}) {
    return fetch(url, {
        method: 'post', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', 
        referrer: 'no-referrer', 
        body: JSON.stringify(data), 
    })
    .then(response => response.json()); 
}

// validating user login token
function tokenCheck(url = '', token = '') {
    return fetch(url, {
        method: 'get',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token
        },
        redirect: 'follow',
        referrer: 'no-referrer',  
    })
    .then(response => response.json()); 
}