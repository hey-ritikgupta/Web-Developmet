var dt= new Date();
document.getElementById("datetime1").innerHTML=dt.toDateString();

function displayClock()
{
  var date= new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = (hour >= 12) ? "PM" : "AM";
  var hour=check(hour);
  var min=check(min);
  var sec=check(sec);

  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
  document.getElementById("datetime2").innerHTML=hour + ":" + min + ":" + sec + " " + midday;
}

function check(k)
{
    return (k<10? "0"+k : k);
}

setInterval(displayClock,500);

var modal= document.getElementById("mymodal");
var button=document.getElementById("b1");
button.onclick= function () {
  modal.style.display="block";
}