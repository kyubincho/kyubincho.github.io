
// Dynamic page maker

let no_hikes = 35;
var hike_i;
for (hike_i = 1; hike_i < no_hikes; hike_i++) {

    let date = document.createTextNode(data["Date"]);
    let title = document.createTextNode(data["Location"]);

    hikePage = document.implementation.createHTMLDocument(hike_i);

    const head = document.getElementsByTagName("head")[0];

    let script = document.createElement("script");




    const body = document.getElementsByTagName("body")[0];

}



<!DOCTYPE html>
<html lang="en">
<head>
  <script type="text/javascript" src="../../officialhikes.js"></script>
  <script
    src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous">
  </script>
  <script> 
  $(function(){
    $("#header").load("header.html"); 
  });
  </script> 
  <div id="header"></div>
  
</head>

<body>

  <script>
    $.getJSON("../../hikedata.json", function(data) {
      createHTML(data, i);
    });
  </script>

</body>