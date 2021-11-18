//get current time

function difference(){
    let currentDate = new Date();
    let targetDate = new Date("Jan 14 2022 11:59:00 pm");
    let distance = targetDate -currentDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //convert 
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    console.log(days,hours,minutes,seconds);
}
setInterval(difference,1000);
/*function currentTime() {

    let timestamp = new Date();
    console.log(timestamp);

    
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let mintutesElement = document.getElementById('minutes');
    let secondElement = document.getElementById('seconds');

    daysElement.innerHTML = timestamp.getDate();
    hoursElement.innerHTML = timestamp.getHours();
    mintutesElement.innerHTML = timestamp.getMinutes();
    secondElement.innerHTML = timestamp.getSeconds();

    //get currrent date,time,hours,second,mintute,day
    console.log('Date:' + timestamp.getDate());
    console.log('Day:' + timestamp.getDay());
    console.log('Year:' + timestamp.getFullYear());
    console.log('Hour:' + timestamp.getHours());
    console.log('Mintutes:' + timestamp.getMinutes());
    console.log('Second:' + timestamp.getSeconds());
    console.log('Millisecond:' + timestamp.getMilliseconds());
    console.log('Time:' + timestamp.getTime());

}
//call a function regular interval
setInterval(currentTime, 1000);

function targetDate(){
    let targetDate = new Date( );
    console.log(targetDate);

    console.log("year:"+ targetDate.getDate());
    console.log('Day:' + targetDate.getDay());
    console.log('Year:' + targetDate.getFullYear());
    console.log('Hour:' + targetDate.getHours());
    console.log('Mintutes:' + targetDate.getMinutes());
}

function difference(){
    var now = new Date().getTime();
    var countDownDate = new Date("jan 1, 2022 11:59:00 ");
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id = "demo"
  
  document.querySelector('days'),innerHTML = days;
  document.querySelector('hours'),innerHTML = hours;
  document.querySelector('minutes'),innerHTML = minutes;
  document.querySelector('seconds'),innerHTML = seconds;
  console.log(days,hours,minutes,seconds);

}setInterval(difference,1000);*/