function number(){
  let number = document.getElementById("input").value;

switch (number) {
  case "7":
    dayName = 'Sunday';
    break;
  case "1":
    dayName = 'Monday';
    break;
  case "2":
    dayName = 'Tuesday';
    break;
  case "3":
    dayName = 'Wednesday';
    break;
  case" 4":
    dayName = 'Thursday';
    break;
  case "5":
    dayName = 'Friday';
    break;
  case "6":
    dayName = 'Saturday';
    break;
  default:
    dayName = 'an Invalid day';
}


document.getElementById("Here").innerHTML = "Today is " + dayName;

}