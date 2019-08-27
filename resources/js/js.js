// // get time
// // if time morning say morning
// // if afternoon
// // if evening

function theTime() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var d = new Date();
  var day = days[d.getDay()];
  var hr = d.getHours();
  var min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var ampm = "am";
  if (hr > 12) {
    hr -= 12;
    ampm = "pm";
  }
  var date = d.getDate();
  var month = months[d.getMonth()];
  var year = d.getFullYear();
  var x = document.getElementById("time");
  // x.innerHTML = day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;
  if (hr < 12 && ampm == "am") {
    document.getElementById("time").innerHTML = "Good morning"
  } else if (hr < 3 && ampm == "pm") {

  }
}

// function test() {
//   var tt = "This fucking works"
//   document.getElementById("time").innerHTML=tt
// }
