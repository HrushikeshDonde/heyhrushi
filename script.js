let hour = document.getElementById("hr");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");

function getTime() {
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let date = now.getDate();
  let mon = now.getMonth();
  let year = now.getFullYear();
  let day = now.getDay();
  let days = ["Mon", "Tue", "Wed", "Thi", "Fri", "Sat", "Sun"];

  if (hr > 12) {
    document.getElementById("ampm").innerHTML = "PM";
    hr = hr - 12;
  } else {
    document.getElementById.innerHTML = "AM";
  }

  hour.innerHTML = hr <= 9 ? `0${hr}` : `${hr}`;
  minutes.innerHTML = min <= 9 ? `0${min}` : `${min}`;
  seconds.innerHTML = sec <= 9 ? `0${sec}` : `${sec}`;

  document.getElementById("date").innerHTML = `${date}-${mon}-${year}`;
  document.getElementById("day").innerHTML = `${days[day - 1]}`;
}
setInterval(getTime, 1000);
