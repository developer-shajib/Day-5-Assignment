


// // // GPA, CGPA, GRADE function for result publishing


// const getGpa=(gpa)=>{
//     let finalGpa="";
//     if(gpa>=0 && gpa<33){
//         finalGpa=0;
//     }
//     else if(gpa>=33 && gpa<40){
//         finalGpa=1;
//     }
//     else if(gpa>=40 && gpa<50){
//         finalGpa=2;
//     }
//     else if(gpa>=50 && gpa<60){
//         finalGpa=3;
//     }
//     else if(gpa>=60 && gpa<70){
//         finalGpa=3.5;
//     }
//     else if(gpa>=70 && gpa<80){
//         finalGpa=4;
//     }
//     else if(gpa>=80 && gpa<=100){
//         finalGpa=5;
//     }
//     else{
//         finalGpa="invalid"
//     }
//    return finalGpa;
// }
// let getGrade=(gpa)=>{
//     let finalgrade="";
//     if(gpa>=0 && gpa<33){
//         finalgrade="F";
//     }
//     else if(gpa>=33 && gpa<40){
//         finalgrade="D";
//     }
//     else if(gpa>=40 && gpa<50){
//         finalgrade="C";
//     }
//     else if(gpa>=50 && gpa<60){
//         finalgrade="B";
//     }
//     else if(gpa>=60 && gpa<70){
//         finalgrade="A-";
//     }
//     else if(gpa>=70 && gpa<80){
//         finalgrade="A";
//     }
//     else if(gpa>=80 && gpa<=100){
//         finalgrade="A+";
//     }
//     else{
//         finalgrade="invalid"
//     }
//    return finalgrade;
// }






// let stuname=prompt("Your name?");
// let roll=prompt('your roll?')
// let bn=prompt("Bangla");
// let en=prompt("English ");
// let math=prompt("Math");


// console.log(`
// Name    :   ${stuname}
// Roll    :   ${roll}
// ====================================
// Subject     Marks     Gpa         Grade
// Bangla  :   ${bn}       ${getGpa(bn)}   ${getGrade(bn)}
// English :   ${en}       ${getGpa(en)}   ${getGrade(bn)}
// Math    :   ${math}     ${getGpa(math)} ${getGrade(bn)}


// `)