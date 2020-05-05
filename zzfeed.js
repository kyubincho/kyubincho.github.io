//import {userActions} from './userActions.js';

export function feed(apiUrl, feed) {   
    fetch(apiUrl + feed)
    .then(response => response.json())
    .then(json => feedType(json));
    //.then(userActions(apiUrl));
}

export function feedType(json) {
    const feed = document.getElementById("feed");

    // going through all posts in json
    for (let key in json.posts) {
        
        // individual post
        let post = document.createElement("li");
            post.dataset.idPost = "";
            post.setAttribute("class", "post");
            post.setAttribute("id", "post");
            let content = document.createElement("div");
            content.setAttribute("class", "content");
                // subseddit
                let subsedditp = document.createElement("span");
                subsedditp.setAttribute("class", "subseddit post-author");
                let subseddit = document.createTextNode("r/" + json.posts[key].meta.subseddit);
                subsedditp.appendChild(subseddit);
                content.appendChild(subsedditp);
                // author
                let authorp = document.createElement("span");
                authorp.dataset.idAuthor = "";
                authorp.setAttribute("class", "post-author pad");
                let author = document.createTextNode("Posted by u/" + json.posts[key].meta.author);
                authorp.appendChild(author);
                content.appendChild(authorp);
                // published date
                let publishedp = document.createElement("span");
                publishedp.setAttribute("class", "published post-author pad");
                let epochSeconds = json.posts[key].meta.published;
                let published = convertTime(epochSeconds);
                publishedp.appendChild(published);
                content.appendChild(publishedp);
                // title
                let titleHeader = document.createElement("h4");
                titleHeader.dataset.idTitle = "";
                titleHeader.setAttribute("class", "post-title alt-text reduce-margins");
                let title = document.createTextNode(json.posts[key].title);
                titleHeader.appendChild(title);
                content.appendChild(titleHeader);
                // description
                let descriptionp = document.createElement("p");
                descriptionp.setAttribute("class", "description reduce-margins");
                let description = document.createTextNode(json.posts[key].text);
                descriptionp.appendChild(description);
                content.appendChild(descriptionp);
                // upvotes
                let vote = document.createElement("div");
                vote.dataset.idUpvotes = "";
                vote.setAttribute("class", "vote");
                let upvotes = 0;
                for (let count in json.posts[key].meta.upvotes) {
                    upvotes++;
                }
                //console.log(users);
                // upvote button
                let upb = document.createElement("button");
                upb.setAttribute("class", "voteArrows reduce-margins central");
                upb.setAttribute("id", "upb");
                let up = document.createElement("p");
                up.setAttribute("class", "reduce-margins central");
                let upArrow = document.createTextNode('\u2191');
                up.appendChild(upArrow);
                upb.appendChild(up);
                vote.appendChild(upb);                
                // no. upvotes button
                let midb = document.createElement("button");
                midb.setAttribute("class", "voteArrows reduce-margins central");
                midb.setAttribute("id", "midb");
                let mid = document.createElement("p");
                mid.setAttribute("class", "reduce-margins central");
                let upvotesCount = document.createTextNode(upvotes);
                mid.appendChild(upvotesCount);
                midb.appendChild(mid);
                vote.appendChild(midb);           
                // upvotes modal window
                let modalUpvotes = document.createElement("div");
                modalUpvotes.setAttribute("id", "upvotesModal");
                modalUpvotes.setAttribute("class", "modal");
                    // modal contents
                    let modalUpvotesContent = document.createElement("div");
                    modalUpvotesContent.setAttribute("class", "modal-content");
                        // close button
                        let modalUpvotesClose = document.createElement("span");
                        modalUpvotesClose.setAttribute("class", "close");
                        modalUpvotesClose.setAttribute("id", "modalUpvotesClose");
                            let closeUpvotes = document.createTextNode("X");
                            modalUpvotesClose.appendChild(closeUpvotes);
                        modalUpvotesContent.appendChild(modalUpvotesClose);
                        // modal texts
                        let modalUpvotesh4 = document.createElement("h4");
                        modalUpvotesh4.setAttribute("class", "reduce-margins");
                        let modalUpvotesTitle = document.createTextNode("Upvoted by");
                        modalUpvotesh4.appendChild(modalUpvotesTitle);
                        modalUpvotesContent.appendChild(modalUpvotesh4);
                        // users who upvoted
                        for (let user in json.posts[key].meta.upvotes) {
                            let userp = document.createElement("p");
                            let userText = document.createTextNode
                                           (json.posts[key].meta.upvotes[user]);
                            userp.appendChild(userText);
                            modalUpvotesContent.appendChild(userp);
                        }
                    modalUpvotes.appendChild(modalUpvotesContent);
                feed.appendChild(modalUpvotes);
                // downvote button
                let downb = document.createElement("button");
                downb.setAttribute("class", "voteArrows reduce-margins central");
                downb.setAttribute("id", "downb");
                let down = document.createElement("p");
                down.setAttribute("class", "reduce-margins central");
                let downArrow = document.createTextNode('\u2193');
                down.appendChild(downArrow);
                downb.appendChild(down);
                vote.appendChild(downb);
                post.appendChild(vote);
                // image
                if (json.posts[key].thumbnail != null) {
                    let imgdiv = document.createElement("div");
                    var image = new Image();
                    image.src = 'data:image/png;base64,' + json.posts[key].thumbnail;
                    imgdiv.appendChild(image);
                    content.appendChild(imgdiv);
                }                    
                // comments
                let commentsb = document.createElement("button");
                commentsb.setAttribute("class", "comments reduce-margins central");
                commentsb.setAttribute("id", "commentsb");
                let commentsp = document.createElement("p");
                commentsp.setAttribute("class", "post-author");
                let comments = 0;
                for (let comment in json.posts[key].comments) {
                    comments++;
                }
                let commentsCount = document.createTextNode("Comments: " + comments);
                commentsp.appendChild(commentsCount);
                commentsb.appendChild(commentsp);
                content.appendChild(commentsb);
                // comments modal window
                let modalComments = document.createElement("div");
                modalComments.setAttribute("id", "commentsModal");
                modalComments.setAttribute("class", "modal");
                    // modal contents
                    let modalCommentsContent = document.createElement("div");
                    modalCommentsContent.setAttribute("class", "modal-comments-content");
                        // close button
                        let modalCommentsClose = document.createElement("span");
                        modalCommentsClose.setAttribute("class", "close");
                        modalCommentsClose.setAttribute("id", "modalCommentsClose");
                            let closeComments = document.createTextNode("X");
                            modalCommentsClose.appendChild(closeComments);
                        modalCommentsContent.appendChild(modalCommentsClose);
                        // modal texts
                        let modalCommentsh4 = document.createElement("h4");
                        modalCommentsh4.setAttribute("class", "reduce-margins");
                        let modalCommentsTitle = document.createTextNode("Comments");
                        modalCommentsh4.appendChild(modalCommentsTitle);
                        modalCommentsContent.appendChild(modalCommentsh4);
                        // each comment nodes
                        for (let c in json.posts[key].comments) {
                            let cp = document.createElement("div");
                            let commentAuthorp = document.createElement("span");
                            commentAuthorp.setAttribute("class", "post-author");
                            let commentAuthor = document.createTextNode
                                                ("u/" + json.posts[key].comments[c].author);
                            commentAuthorp.appendChild(commentAuthor);
                            cp.appendChild(commentAuthorp);                    
                            let commentPublishedp = document.createElement("span");
                            commentPublishedp.setAttribute("class", "post-author pad");
                            let commentSeconds = (json.posts[key].comments[c].published); 
                            let commentPublished = convertTime(commentSeconds);
                            commentPublishedp.appendChild(commentPublished);
                            cp.appendChild(commentPublishedp);                        
                            let commentTextp = document.createElement("p");
                            commentTextp.setAttribute("class", "reduce-margins");
                            let commentText = document.createTextNode
                                              (json.posts[key].comments[c].comment);
                            commentTextp.appendChild(commentText);
                            cp.appendChild(commentTextp); 
                            modalCommentsContent.appendChild(cp);
                        }
                    modalComments.appendChild(modalCommentsContent);
                feed.appendChild(modalComments);
            post.appendChild(content);
        feed.appendChild(post);          
    }
}

// converts epoch seconds to actual date and time, returns text node
function convertTime(epochSeconds) {
    let date = new Date(0);
    date.setUTCSeconds(epochSeconds);
    const options = {year: "2-digit", month: "2-digit", day: "2-digit",
                      hour: "2-digit", minute: "2-digit"}
    const publishedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    
    let published = document.createTextNode(publishedDate);
    return published;
}
