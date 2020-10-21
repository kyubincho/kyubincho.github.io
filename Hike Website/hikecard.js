// Creates each hike page and Hike cards from the data

function createHikeCards(jsonArray) {

    // For each hike create a new html document and populate it with the doctype and unique hike number
    for (var hike_i = 0; hike_i < jsonArray.length - 6; hike_i++) {
        data = jsonArray[hike_i];
        //console.log(data);

        /* Cannot find a way to dynamically create and delete existing html files for each hike

        // Create a new html document page for given hike_i hike
        var headCodeBlock = 
        '<script type="text/javascript" src="../../officialhikes.js"></script>' +
        '<script' +
        ' src="https://code.jquery.com/jquery-3.3.1.js"' +
        ' integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="' +
        ' crossorigin="anonymous"></script>' +
        '<script>' +
        '$(function(){' +
        ' $("#header").load("header.html");' +
        '</script>' +
        '<div id="header"></div>' ;
    
        var bodyCodeBlock = 
            '<script>' +
            '$.getJSON("../../hikedata.json", function(data) {' +
            '  createHTML(data, ' + hike_i + ');' +
            '});' +
            '</script>' ;

        var num = String(hike_i)
        
        var hikePage_name = num.concat("_", data["Date"], "_", data["Location"], ".html");
        console.log(hikePage_name)
    
        hikePage = document.implementation.createHTMLDocument(hikePage_name);
    
        hikePage.getElementsByTagName("head").innerHTML = headCodeBlock;
        hikePage.getElementsByTagName("body").innerHTML = bodyCodeBlock;
        
        */
        

        var num = String(data["No."]);
        var date = data["Date"];
        var date = date.replace(/\//g, "-");
        var location = data["Location"];
        var location = location.replace(/ /g, "_");
        var location = location.replace(/:/g, "");
        var location = location.replace(/-/g, "");

        var hikePage_name = num.concat("_", date, "_", location, ".html");
        //console.log(hikePage_name)

        // Create a hike card that references and links to relevant page and thumbnail
        const officialhikesgrid = document.getElementById("officialhikesgrid");
        
        // <!-- Hike Card -->            
        let hikecard = document.createElement("div");
        hikecard.setAttribute("class", "hikecard");
        
            // href link to hike page
            let hikeLink = document.createElement("a");
            hikeLink.setAttribute("href", "officialhikes/" + hikePage_name);
            hikeLink.setAttribute("class", "fill");

                // <!-- Hike Thumbnail -->
                let hikeThumbnail = document.createElement("div");
                hikeThumbnail.setAttribute("class", "hikecardimg");
                    let imgLink = document.createElement("img");
                    imgLink.setAttribute("class", "image");
                    imgLink.setAttribute("src", "../../website images/" + data["No."] + ".jpg");
                    hikeThumbnail.appendChild(imgLink);
                hikeLink.appendChild(hikeThumbnail);

                // <!-- Hike Text -->
                let hikeText = document.createElement("div");
                hikeText.setAttribute("class", "hikecardtext");

                    let hikeName = document.createElement("p");
                    hikeName.setAttribute("class", "hikename")
                        let hikeNameText = document.createTextNode(data["Location"]);
                        hikeName.appendChild(hikeNameText);
                    hikeText.appendChild(hikeName);

                    let hikeDate = document.createElement("p");
                    hikeDate.setAttribute("class", "hikedate")
                        let hikeDateText = document.createTextNode(data["Date"]);
                        hikeDate.appendChild(hikeDateText);
                    hikeText.appendChild(hikeDate);

                hikeLink.appendChild(hikeText);

                // <!-- Hike stats -->
                let hikestats = document.createElement("div");
                hikestats.setAttribute("class", "hikecardstatscontainer");
                    let hikestatsgrid = document.createElement("div");
                    hikestatsgrid.setAttribute("class", "hikecardstatsgrid");
                        
                        // <!-- Hike distance -->
                        let hikeDistance = document.createElement("div");
                        hikeDistance.setAttribute("class", "stat");
                            
                            let iconDistance = document.createElement("img");
                            iconDistance.setAttribute("class", "hikestatsicons");
                            iconDistance.setAttribute("id", "iconDistance");
                            iconDistance.setAttribute("src", "../../website images/iconDistance.png");
                            hikeDistance.appendChild(iconDistance);

                            let hikeDistanceP = document.createElement("p");
                            hikeDistanceP.setAttribute("class", "hikecardstats")
                                let hikeDistancePText = document.createTextNode(data["Distance"] + "km");
                                hikeDistanceP.appendChild(hikeDistancePText);
                            hikeDistance.appendChild(hikeDistanceP);

                        hikestatsgrid.appendChild(hikeDistance);

                        // <!-- Hike ascent -->
                        let hikeAscent = document.createElement("div");
                        hikeAscent.setAttribute("class", "stat");
                            
                            let iconAscent = document.createElement("img");
                            iconAscent.setAttribute("class", "hikestatsicons");
                            iconAscent.setAttribute("id", "iconAscent");
                            iconAscent.setAttribute("src", "../../website images/iconAscent.png");
                            hikeAscent.appendChild(iconAscent);

                            let hikeAscentP = document.createElement("p");
                            hikeAscentP.setAttribute("class", "hikecardstats")
                                let hikeAscentPText = document.createTextNode(data["Ascent"] + "m");
                                hikeAscentP.appendChild(hikeAscentPText);
                            hikeAscent.appendChild(hikeAscentP);

                        hikestatsgrid.appendChild(hikeAscent);

                        // <!-- Hike people -->
                        let hikePeople = document.createElement("div");
                        hikePeople.setAttribute("class", "stat");
                            
                            let iconPeople = document.createElement("img");
                            iconPeople.setAttribute("class", "hikestatsicons");
                            iconPeople.setAttribute("id", "iconPeople");
                            iconPeople.setAttribute("src", "../../website images/iconPeople.png");
                            hikePeople.appendChild(iconPeople);

                            let hikePeopleP = document.createElement("p");
                            hikePeopleP.setAttribute("class", "hikecardstats")
                                let hikePeoplePText = document.createTextNode(data["PPL"]);
                                hikePeopleP.appendChild(hikePeoplePText);
                            hikePeople.appendChild(hikePeopleP);

                        hikestatsgrid.appendChild(hikePeople);

                        // <!-- Hike difficulty -->
                        let hikeDifficulty = document.createElement("div");
                        hikeDifficulty.setAttribute("class", "stat");
                            
                            let iconDifficulty = document.createElement("img");
                            iconDifficulty.setAttribute("class", "hikestatsicons");
                            iconDifficulty.setAttribute("id", "iconDifficulty");
                            iconDifficulty.setAttribute("src", "../../website images/iconDifficulty.png");
                            hikeDifficulty.appendChild(iconDifficulty);

                            let hikeDifficultyP = document.createElement("p");
                            hikeDifficultyP.setAttribute("class", "hikecardstats")
                                let hikeDifficultyPText = document.createTextNode(data["Difficulty"]);
                                hikeDifficultyP.appendChild(hikeDifficultyPText);
                            hikeDifficulty.appendChild(hikeDifficultyP);

                        hikestatsgrid.appendChild(hikeDifficulty);

                    hikestats.appendChild(hikestatsgrid);
                hikeLink.appendChild(hikestats);
            hikecard.appendChild(hikeLink);
        officialhikesgrid.appendChild(hikecard);
    }
}