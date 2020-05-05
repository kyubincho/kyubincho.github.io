export function userActions(apiUrl) {
    /*
    let upvotesModalArr = document.querySelectorAll(".upvotesModal");
    let upvotesbArr = document.querySelectorAll(".midb");
    let modalUpvotesCloseArr = document.querySelectorAll(".modalUpvotseClose");
    
    let countOpen = 0;
    UpvotesArr.forEach(function(elem) {
        elem.addEventListener("click", (event) => {
            upvotesModalArr[countOpen].style.display = "block";
        });
        countOpen++;
    });
    
    let countClose = 0;
    modalUpvotesCloseArr.forEach(function(elem) {
        elem.addEventListener("click", (event) => {
            upvotesModalArr[countClose].style.display = "none";
        });
        countClose++;
    });
    
    window.addEventListener('click', (event) => {
        for (let count in upvotesModalArr) {
            upvotesModal[count].style.display = "none";
        } 
    });  
    */
    
    // upvotes modal window
    const upvotesModal = document.getElementById("upvotesModal");
    const upvotesb = document.getElementById("midb");
    const modalUpvotesClose = document.getElementById("modalUpvotesClose");
    // opening upvotes modal on clicking upvotes number
    upvotesb.addEventListener('click', (event) => {
        upvotesModal.style.display = "block";                           
    });
    // closing upvotes modal when clicking close button
    modalUpvotesClose.addEventListener('click', (event) => {
        upvotesModal.style.display = "none";                          
    });    
    // closing login modal when clicking outside upvotes modal
    window.addEventListener('click', (event) => {
        if (event.target == upvotesModal) {
            upvotesModal.style.display = "none";
        }      
    });  
    
    
    // comments modal window
    const commentsModal = document.getElementById("commentsModal");
    const commentsb = document.getElementById("commentsb");
    const modalCommentsClose = document.getElementById("modalCommentsClose");
    // opening comments modal on clicking upvotes number
    commentsb.addEventListener('click', (event) => {
        commentsModal.style.display = "block";                           
    });
    // closing comments modal when clicking close button
    modalCommentsClose.addEventListener('click', (event) => {
        commentsModal.style.display = "none";                          
    });    
    // closing comments modal when clicking outside comments modal
    window.addEventListener('click', (event) => {
        if (event.target == commentsModal) {
            commentsModal.style.display = "none";
        }      
    });  
}