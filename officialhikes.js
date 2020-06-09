function createHTML(jsonArray, number) {
    data = jsonArray[number - 1];

    const body = document.getElementsByTagName("body")[0];


    // title div
    let title = document.createElement("div");
    title.setAttribute("id", "title");
    body.appendChild(title);

    // navbar div
    let navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    body.appendChild(navbar);

    // background class div
    let background = document.createElement("div");
    background.setAttribute("class", "background");

        // main div
        let main = document.createElement("div");
        main.setAttribute("class", "main");
            // content div
            let content = document.createElement("div");
            content.setAttribute("class", "content");
            
                // h1 (title)
                let h1 = document.createElement("h1");
                    let h1_title = document.createTextNode(data["Location"]);
                    h1.appendChild(h1_title);
                content.appendChild(h1);
                
                // (Date)
                let h2 = document.createElement("h2");
                    let h2_date = document.createTextNode(data["Date"]);
                    h2.appendChild(h2_date);
                content.appendChild(h2);

                // Div for stats
                let stats = document.createElement("div");
                stats.setAttribute("class", "statsgrid");

                    // Distance (Inside stats div)
                    let distance = document.createElement("p");
                        let distance_text = document.createTextNode("Distance: " + data["Distance"] + "km");
                        distance.appendChild(distance_text);
                    stats.appendChild(distance);
                
                    // Ascent (Inside stats div)
                    let ascent = document.createElement("p");
                        let ascent_text = document.createTextNode("Ascent: " + data["Ascent"] + "m");
                        ascent.appendChild(ascent_text);
                    stats.appendChild(ascent);
                
                    // Descent (Inside stats div)
                    let descent = document.createElement("p");
                        let descent_text = document.createTextNode("Descent: " + data["Descent"] + "m");
                        descent.appendChild(descent_text);
                    stats.appendChild(descent);
                
                    // Difficulty (Inside stats div)
                    let difficulty = document.createElement("p");
                        let difficulty_text = document.createTextNode("Difficulty: " + data["Difficulty"]);
                        difficulty.appendChild(difficulty_text);
                    stats.appendChild(difficulty);
                
                    // People (Inside stats div)
                    let people = document.createElement("p");
                        let people_text = document.createTextNode("People: " + data["PPL"]);
                        people.appendChild(people_text);
                    stats.appendChild(people);

                content.appendChild(stats);

                //  Div (Hike Description)
                let hike_desc = document.createElement("div");

                    // Hike Overview Title
                    let hike_desc_title = document.createElement("h2");
                        let hike_desc_title_text = document.createTextNode("Hike Overview");
                        hike_desc_title.appendChild(hike_desc_title_text);
                    hike_desc.appendChild(hike_desc_title);
                
                    // Hike Description Content
                    let hike_desc_content = document.createElement("p")
                        let hike_desc_content_text = document.createTextNode(data["Description"]);
                        hike_desc_content.appendChild(hike_desc_content_text);
                    hike_desc.appendChild(hike_desc_content);

                content.appendChild(hike_desc);

                // View Full Album
                let view_album = document.createElement("div");
                    let view_album_a = document.createElement("a");
                    view_album_a.setAttribute("class", "fullalbum");
                    view_album_a.setAttribute("href", data["Album_Link"]);
                        let view_album_a_text = document.createTextNode("View Full Album");
                        view_album_a.appendChild(view_album_a_text);
                    view_album.appendChild(view_album_a);

                content.appendChild(view_album);
            
            main.appendChild(content);

        background.appendChild(main);

    body.appendChild(background);

    
    // footer div
    let footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    body.appendChild(footer);
}