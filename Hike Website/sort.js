// NEED TO FIX!!!! ORDER BY DATE IS NOT ALWAYS ACCURATE!!
function reorderDate(date) {
  var dateSplit = date.split("/");
  day = dateSplit[0];
  month = dateSplit[1];
  year = dateSplit[2];

  return year.concat(month, day);
}

function distanceFix(distance) { 
  return parseFloat(distance.replace("km", ""));
}

function ascentFix(ascent) {
  return parseFloat(ascent.replace("m", ""));
}

function sortBy(argName) {
  var list, i, switching, card, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("officialhikesgrid");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    card = list.getElementsByClassName("hikecard");
    // Loop through all list-items:
    for (i = 0; i < (card.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;

      // sort by ...
      var c1, c2;
      switch(argName) {
        case "Name":
          c1 = card[i].getElementsByClassName("hikecardtext")[0].getElementsByClassName("hikename")[0].innerHTML.toLowerCase();
          c2 = card[i + 1].getElementsByClassName("hikecardtext")[0].getElementsByClassName("hikename")[0].innerHTML.toLowerCase();
          break;
        case "Date":
          c1 = reorderDate(card[i].getElementsByClassName("hikecardtext")[0].getElementsByClassName("hikedate")[0].innerHTML.toLowerCase());
          c2 = reorderDate(card[i + 1].getElementsByClassName("hikecardtext")[0].getElementsByClassName("hikedate")[0].innerHTML.toLowerCase());
          break;
        case "Distance":
          c1 = distanceFix(card[i].getElementsByClassName("hikecardstatsgrid")[0].getElementsByClassName("stat")[0].getElementsByClassName("hikecardstats")[0].innerHTML.toLowerCase());
          c2 = distanceFix(card[i + 1].getElementsByClassName("hikecardstatsgrid")[0].getElementsByClassName("stat")[0].getElementsByClassName("hikecardstats")[0].innerHTML.toLowerCase());
          break;
        case "Ascent":
          c1 = ascentFix(card[i].getElementsByClassName("hikecardstatsgrid")[0].getElementsByClassName("stat")[1].getElementsByClassName("hikecardstats")[0].innerHTML.toLowerCase());
          c2 = ascentFix(card[i + 1].getElementsByClassName("hikecardstatsgrid")[0].getElementsByClassName("stat")[1].getElementsByClassName("hikecardstats")[0].innerHTML.toLowerCase());
          break;
        case "Participants":
          c1 = card[i].getElementsByClassName("hikecardstatsgrid")[0].getElementsByClassName("stat")[2].getElementsByClassName("hikecardstats")[0].innerHTML.toLowerCase();
          c2 = card[i + 1].getElementsByClassName("hikecardstatsgrid")[0].getElementsByClassName("stat")[2].getElementsByClassName("hikecardstats")[0].innerHTML.toLowerCase();
          break;
        case "Difficulty":
          c1 = card[i].getElementsByClassName("hikecardstatsgrid")[0].getElementsByClassName("stat")[3].getElementsByClassName("hikecardstats")[0].innerHTML.toLowerCase();
          c2 = card[i + 1].getElementsByClassName("hikecardstatsgrid")[0].getElementsByClassName("stat")[3].getElementsByClassName("hikecardstats")[0].innerHTML.toLowerCase();
          break;
      }
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (c1 > c2) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (c1 < c2) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      card[i].parentNode.insertBefore(card[i + 1], card[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }

  // delete all other triangles first
  // TODO ▲▲▲▲▲▲▲▲▲▲▲▲

  if (dir == "desc") {
    document.getElementById("officialHikesSortBy").innerHTML = 
    argName + " ▼";

  } else if (dir == "asc") {
    document.getElementById("officialHikesSortBy").innerHTML = 
    argName + " ▲";
  }
  // check for direction
}