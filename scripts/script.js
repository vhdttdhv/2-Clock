function getCorrectTime() {
  const time = new Date();

  const sec = (time.getSeconds() / 60) * 360 + 180;
  const min = (time.getMinutes() / 60) * 360 + 180;
  const hour = (time.getHours() / 12) * 360 + 180;

  document.querySelector(".clock-hour").style.transform = `rotate(${hour}deg)`;
  document.querySelector(".clock-min").style.transform = `rotate(${min}deg)`;
  document.querySelector(".clock-sec").style.transform = `rotate(${sec}deg)`;
}

getCorrectTime();

setInterval(getCorrectTime, 1000);
