$(document).ready(function(){
    console.log("LETS GO!!");


function cityBackground(){
    event.preventDefault();
    // get user input
    var city = $('#city-type').val();
    var city = (city.trim());

    //return city to see trim in action
    console.log(city);
    // conditionals for input comparison to defined cities

    if (city == "New York" || city == "New York City" || city == "NYC") {
        //clear out any classes already there for each conditional
        $('body').removeClass();
        $('body').addClass('nyc');
        }
    else if (city == "San Francisco" || city == "SF" || city == "Bay Area" ) {
        $('body').removeClass();
        $('body').addClass('sf');
        }
    else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
        $('body').removeClass();
        $('body').addClass('la');
        }
    else if (city == "Austin" || city == "ATX") {
        $('body').removeClass();
        $('body').addClass('austin');
        }
    else if (city == "Sydney" || city == "SYD") {
        $('body').removeClass();
        $('body').addClass('sydney');
        }
    //else {
    //Catch any input and give a message if not valid
    //     $('#catchall').html("Not a valid city!!");
   //     }
     //reset entered values on page
     $('#city-type').val('');

    }
    //All this happens when submit is clicked
    $('#submit-btn').click(cityBackground);

});