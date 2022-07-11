
// Dynamic page maker

$.getJSON("hikedata.json", function(hikedata) {
  let no_hikes = 1100;
  var hike_i;
  
  // For each hike create a new html document and populate it with the doctype and unique hike number
  for (hike_i = 1; hike_i < no_hikes; hike_i++) {
    // Check if hike number id exists to limit number of pages created to ones that exist
    if (hikedata["No."] === hike_i);
      data = hikedata.find(record => record["No."] === hike_i)
      
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

      let date = document.createTextNode(data["Date"]);
      let title = document.createTextNode(data["Location"]);

      hikePage_name = hike_i.concat(date, title, ".html")

      console.log(hikePage_name)
  
      hikePage = document.implementation.createHTMLDocument(hikePage_name);
  
      console.log(hikePage)

      hikePage.getElementsByTagName("head").innerHTML = headCodeBlock;
      hikePage.getElementsByTagName("body").innerHTML = bodyCodeBlock;
  
  }
  
});
 

