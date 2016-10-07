var workMinutes = document.getElementById("workMinutes");
var workSeconds = document.getElementById("workSeconds");

function startWorkTimer() {

  var minutes = workMinutes.innerHTML;
  var seconds = workSeconds.innerHTML;

  if (seconds == 0) {
    if (minutes == 0) {
        alert("Время вышло");
        //window.location.reload();
        return;
      }   
    minutes--;
    if (minutes < 10) minutes = "0" + minutes;
    seconds = 59;
  }
  else seconds--;

  if (seconds < 10) seconds = "0" + seconds;
  //document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
  /*wMinText = m;
  wSecText = s;*/
  document.getElementById("workMinutes").innerHTML = minutes;
  document.getElementById("workSeconds").innerHTML = seconds;

  setTimeout(startWorkTimer, 1000);
}