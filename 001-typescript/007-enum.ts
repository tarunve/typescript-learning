enum DayaOfWeek{
    SUN=100, MON=101, TUE=102, WED, THU, FRI , SAT
}

let day : DayaOfWeek;
day = DayaOfWeek.MON;

if(day == DayaOfWeek.MON){
    console.log('Got to go to work - day ' + day) ;
} else {
    console.log("Its fun day - day  " + day);
}
