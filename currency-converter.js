

// // // Create a currency converter function from taka to USD, CAD, POUND, EURO etc


// function getcur(Currency,amount){
//     let convert="";
    
//     if(Currency="USD"){
//         convert= +amount * 86;
//     }
//     else if(Currency = "CAD"){
//         convert= +amount * 68;
//     }
//     else if(Currency = "Pound"){
//         convert= +amount * 112;
//     }
//     else if(Currency = "Euro"){
//         convert= +amount * 94;
//     }
//     return convert;
// }
// let curr=prompt("Currency");
// let money=prompt("Amount");

// console.log(`
// ${money} ${curr} = ${getcur(curr,money)} BDT`)




// const getMoney=(money,currency)=>{
//     let rate = "" ;
//     switch(currency){
//         case "USD" :
//             rate = 86;
//             break;
//         case "CAD" :
//             rate=68;
//             break;
//         case "Pound" :
//             rate = 115;
//             break;
//         case "Euro" :
//             rate = 99;
//             break;
//     }
//     console.log(`${money} ${currency} = ${money*rate} BDT`)
// }
// let money=prompt("Money?");
// let type=prompt("Your Currecncy?");
// getMoney(money,type);