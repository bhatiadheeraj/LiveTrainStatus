(function($){
  $(function(){

    $('.button-collapse').sideNav();

  });
  $(document).ready(function() {
    $('select').material_select();
  });
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  
  
  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
        


  
  $('.chips-initial').material_chip({
    data: [{
      tag: 'English',
    }, {
      tag: 'Physics',
    }, {
      tag: 'Maths',
    }],
  });
   // end of document ready
})(jQuery); // end of jQuery name space







var tommorow = new Date(new Date().setDate(new Date().getDate()+1));
document.getElementById("tommorow").innerHTML = tommorow.toDateString();

var today = new Date();
document.getElementById("today").innerHTML = today.toDateString()+"(Today)";
console.log(""+today);
var yesterday = new Date(new Date().setDate(new Date().getDate()-1));
document.getElementById("yesterday").innerHTML = yesterday.toDateString()+"(Yesterday)";
var day_before_yesterday = new Date(new Date().setDate(new Date().getDate()-2));
document.getElementById("day_before_yesterday").innerHTML = day_before_yesterday.toDateString();
var twodays_before_yesterday = new Date(new Date().setDate(new Date().getDate()-3));
document.getElementById("twodays_before_yesterday").innerHTML = twodays_before_yesterday.toDateString();
var threedays_before_yesterday = new Date(new Date().setDate(new Date().getDate()-4));
document.getElementById("threedays_before_yesterday").innerHTML = threedays_before_yesterday.toDateString();

