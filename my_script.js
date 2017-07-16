console.log("Hello World!")
function square(position) {
  return position * position
}
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
function write_user_name_in_div() {
  var user_name = $("#name_box").val();
  $("#text_display").text(user_name);
}
function setup() {
  $("#button_ok").click(write_user_name_in_div)
}
$(document).ready(setup);
