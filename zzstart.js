export function start() {
    const root = document.getElementById("root");

    // header
    let header = document.createElement("header");
    header.setAttribute("class", "banner");
    header.setAttribute("id", "nav");  
    // h1
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "flex-center");
    h1.setAttribute("id", "logo");  
    const logo = document.createTextNode("Seddit");
    h1.appendChild(logo);
    header.appendChild(h1);
    // logged in as guest
    let loggedInAsDiv = document.createElement("div");
    loggedInAsDiv.setAttribute("id", "loggedInAsDiv");
    let loggedInAs = document.createElement("p");
    loggedInAs.setAttribute("id", "loggedInAs");
    let loggedInUser = document.createTextNode("Logged in as GUEST");
    loggedInAs.appendChild(loggedInUser);
    loggedInAsDiv.appendChild(loggedInAs);
    header.appendChild(loggedInAsDiv);
    // ul
    let ul = document.createElement("ul");
    ul.setAttribute("class", "nav");    
        // search
        let li1 = document.createElement("li");
        li1.setAttribute("class", "nav-item");
            let input = document.createElement("input");
            input.dataset.idSearch = "";
            input.setAttribute("id", "search");
            input.setAttribute("placeholder", "Search Seddit");
            input.setAttribute("type", "search");
            li1.appendChild(input);
        ul.appendChild(li1);    
        // login button
        let li2 = document.createElement("li");
        li2.setAttribute("class", "nav-item");
            let loginb = document.createElement("button");
            loginb.dataset.idLogin = "";
            loginb.setAttribute("class", "button button-primary");
            loginb.setAttribute("id", "login");
            loginb.setAttribute("href", "loginref");
            const login = document.createTextNode("Log In");
            loginb.appendChild(login);
            li2.appendChild(loginb);
        ul.appendChild(li2);    
        // sign up button
        let li3 = document.createElement("li");
        li3.setAttribute("class", "nav-item");
            let signupb = document.createElement("button");
            signupb.dataset.idSignup = "";
            signupb.setAttribute("class", "button button-secondary");
            signupb.setAttribute("id", "signup");
            const signup = document.createTextNode("Sign Up");
            signupb.appendChild(signup);
            li3.appendChild(signupb);
        ul.appendChild(li3); 
    header.appendChild(ul);    
    root.appendChild(header);

    // main
    let main = document.createElement("main");
    main.setAttribute("role", "main");
    // feed
    let feed = document.createElement("ul");
    feed.setAttribute("id", "feed");
    feed.dataset.idFeed = "";
        // feed header
        let feedHeader = document.createElement("div");
        feedHeader.setAttribute("class", "feed-header");
            // feed-title
            let feedTitle = document.createElement("h3");
            feedTitle.setAttribute("class", "feed-title alt-text");
            const popular = document.createTextNode("Popular posts");
            feedTitle.appendChild(popular);
            feedHeader.appendChild(feedTitle);
            // post button
            let postb = document.createElement("button");
            postb.setAttribute("class", "button button-secondary");
            postb.setAttribute("id", "post");
            const postbName = document.createTextNode("Post");
            postb.appendChild(postbName);
            feedHeader.appendChild(postb);
        feed.appendChild(feedHeader);
    main.appendChild(feed);
    root.appendChild(main);
    
    loginModal();
    signupModal();
    
    // login modal window
    function loginModal() {
        let modal = document.createElement("div");
        modal.setAttribute("id", "loginModal");
        modal.setAttribute("class", "modal");
            // modal contents
            let modalContent = document.createElement("div");
            modalContent.setAttribute("class", "modal-content");
            // login form
            let form = document.createElement("form");
            form.setAttribute("class", "form");
            form.setAttribute("name", "login");
                // close button
                let modalClose = document.createElement("span");
                modalClose.setAttribute("class", "close");
                    let close = document.createTextNode("X");
                    modalClose.appendChild(close);
                form.appendChild(modalClose);
                // modal texts
                let modalh4 = document.createElement("h4");
                modalh4.setAttribute("class", "reduce-margins");
                let modalTitle = document.createTextNode("Login to Seddit!!!");
                modalh4.appendChild(modalTitle);
                form.appendChild(modalh4);
                // username input box
                let modalUsername = document.createElement("p");
                let username = document.createTextNode("Username: ");
                modalUsername.appendChild(username);
                form.appendChild(modalUsername);
                let usernameInput = document.createElement("input");
                usernameInput.setAttribute("placeholder", "Username");
                usernameInput.setAttribute("name", "loginUsername");
                form.appendChild(usernameInput);
                // password input box
                let modalPassword = document.createElement("p");
                let password = document.createTextNode("Password: ");
                modalPassword.appendChild(password);
                form.appendChild(modalPassword);
                let passwordInput = document.createElement("input");
                passwordInput.setAttribute("placeholder", "Password");
                passwordInput.setAttribute("name", "loginPassword");
                passwordInput.setAttribute("type", "password");
                form.appendChild(passwordInput);  
                // submit button
                let submitb = document.createElement("input");
                submitb.setAttribute("class", "button button-secondary submitBox");
                submitb.setAttribute("id", "loginSubmit");
                submitb.setAttribute("type", "submit");
                submitb.setAttribute("value", "Login");
                form.appendChild(submitb);    
                // error messages
                let errorp = document.createElement("p");
                errorp.setAttribute("id", "errorlogin");
                errorp.setAttribute("class", "redText");
                form.appendChild(errorp);
            modalContent.appendChild(form);
            modal.appendChild(modalContent);
        root.appendChild(modal);
    }
    
    // signup modal window
    function signupModal() {
        let modal = document.createElement("div");
        modal.setAttribute("id", "signupModal");
        modal.setAttribute("class", "modal");
            // modal contents
            let modalContent = document.createElement("div");
            modalContent.setAttribute("class", "modal-content");
            // login form
            let form = document.createElement("form");
            form.setAttribute("class", "form");
            form.setAttribute("name", "signup");
                // close button
                let modalClose = document.createElement("span");
                modalClose.setAttribute("class", "close");
                    let close = document.createTextNode("X");
                    modalClose.appendChild(close);
                form.appendChild(modalClose);
                // modal texts
                let modalh4 = document.createElement("h4");
                modalh4.setAttribute("class", "reduce-margins");
                let modalTitle = document.createTextNode("Signup to Seddit!!!");
                modalh4.appendChild(modalTitle);
                form.appendChild(modalh4);
                // full name
                let modalFullName = document.createElement("p");
                let fullName = document.createTextNode("Enter your name: ");
                modalFullName.appendChild(fullName);
                form.appendChild(modalFullName);
                let fullNameInput = document.createElement("input");
                fullNameInput.setAttribute("placeholder", "Your Name");
                fullNameInput.setAttribute("name", "signupFullName");
                form.appendChild(fullNameInput);
                // email
                let modalEmail = document.createElement("p");
                let email = document.createTextNode("Enter your email: ");
                modalEmail.appendChild(email);
                form.appendChild(modalEmail);
                let emailInput = document.createElement("input");
                emailInput.setAttribute("placeholder", "Email");
                emailInput.setAttribute("name", "signupEmail");
                form.appendChild(emailInput);
                // username signup box
                let modalUsername = document.createElement("p");
                let username = document.createTextNode("Pick a username: ");
                modalUsername.appendChild(username);
                form.appendChild(modalUsername);
                let usernameInput = document.createElement("input");
                usernameInput.setAttribute("placeholder", "Username");
                usernameInput.setAttribute("name", "signupUsername");
                form.appendChild(usernameInput);
                // password signup box
                let modalPassword = document.createElement("p");
                let password1 = document.createTextNode("Choose a password: ");
                modalPassword.appendChild(password1);
                form.appendChild(modalPassword);
                let passwordInput1 = document.createElement("input");
                passwordInput1.setAttribute("placeholder", "Password");
                passwordInput1.setAttribute("name", "signupPassword1");
                passwordInput1.setAttribute("type", "password");
                form.appendChild(passwordInput1);
                // password signup confirmation box
                let confirmPassword = document.createElement("p");
                let password2 = document.createTextNode("Re-enter password: ");
                confirmPassword.appendChild(password2);
                form.appendChild(confirmPassword);
                let passwordInput2 = document.createElement("input");
                passwordInput2.setAttribute("placeholder", "Confirm Password");
                passwordInput2.setAttribute("name", "signupPassword2");
                passwordInput2.setAttribute("type", "password");
                form.appendChild(passwordInput2);
                // submit button
                let submitb = document.createElement("input");
                submitb.setAttribute("class", "button button-secondary submitBox");
                submitb.setAttribute("id", "signupSubmit");
                submitb.setAttribute("type", "submit");
                submitb.setAttribute("value", "Create");
                form.appendChild(submitb);    
                // error messages
                let errorp = document.createElement("p");
                errorp.setAttribute("id", "errorsignup");
                errorp.setAttribute("class", "redText");
                form.appendChild(errorp)
            modalContent.appendChild(form);
            modal.appendChild(modalContent);
        root.appendChild(modal);
    }
}

       