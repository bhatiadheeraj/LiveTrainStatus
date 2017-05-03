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
document.getElementById("tommorow").value = tommorow.toISOString().slice(0,10).replace(/-/g,"");

var today = new Date();
document.getElementById("today").innerHTML = today.toDateString()+"(Today)";
document.getElementById("today").value = today.toISOString().slice(0,10).replace(/-/g,"");
console.log(""+today);

var yesterday = new Date(new Date().setDate(new Date().getDate()-1));
document.getElementById("yesterday").innerHTML = yesterday.toDateString()+"(Yesterday)";
document.getElementById("yesterday").value = yesterday.toISOString().slice(0,10).replace(/-/g,"");

var day_before_yesterday = new Date(new Date().setDate(new Date().getDate()-2));
document.getElementById("day_before_yesterday").innerHTML = day_before_yesterday.toDateString();
document.getElementById("day_before_yesterday").value = day_before_yesterday.toISOString().slice(0,10).replace(/-/g,"");

var twodays_before_yesterday = new Date(new Date().setDate(new Date().getDate()-3));
document.getElementById("twodays_before_yesterday").innerHTML = twodays_before_yesterday.toDateString();
document.getElementById("twodays_before_yesterday").value = twodays_before_yesterday.toISOString().slice(0,10).replace(/-/g,"");

var threedays_before_yesterday = new Date(new Date().setDate(new Date().getDate()-4));
document.getElementById("threedays_before_yesterday").innerHTML = threedays_before_yesterday.toDateString();
document.getElementById("threedays_before_yesterday").value = threedays_before_yesterday.toISOString().slice(0,10).replace(/-/g,"");

