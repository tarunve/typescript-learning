/**
 *  -   Enums can be created for a custom DataType for constant values.
 *  -   If we assign the value to some of the constants in enums, rest of the
 *      constants values will be assigned automatically.
 *          So , in below : WED=103, THU=104, FRI=105, SAT=106
 */
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
