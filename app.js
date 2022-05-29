
                          //// CHAPTER NO 31 - 34 /////


// Question # 01

// document.write(new Date())

// Question # 02

// var now  = new Date().toString().slice(4,7)
// document.write(`Current Month: ${now}`)

// Question # 03

// var now = new Date().toString().slice(0,3);
// document.write(`Today is ${now}`)

// Question # 04

// var now = new Date().toString().slice(0,3);

// if(now ==="sun" || now === "sat"){
//         alert("its Funday")
// }else{
//     alert( "Today is  :" + " " + now)
// }

// Question # 05

// var now  = new Date().getDate();
// if(now <= 15 ){
//         alert("First Fifteen Days of th Month")
// }else{
//     alert("Last days of the month")
// }

// Question # 06

// var now  = new Date()
// var milis = now.getTime()
// var min = now / (1000 * 60*60);
// document.write(now + " <br>" + milis + "<br>" + min)

// Question # 07

// var now = new Date().getHours()
// if(now >= 0 && now < 12 ){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// console.log(now)    


// Question # 08

// var nows = new Date("December , 31 2020")
// document.write(nows)    


// Question # 09

// var ramzanDate = new Date("June 18 ,2015");
// var now = new Date();
// var miliram = ramzanDate.getTime();
// var nowmili = now.getTime();
// var differ =  nowmili - miliram;
// var totalDays = differ / (1000*60*60*24)
// totalDays = Math.floor(totalDays)
// document.write(`${totalDays} Days have passed since 1st Ramzan, 2015`);


// Question # 10

// var now = new Date("Dec 1 , 2015");
// var nowmili = now.getTime()
// var dated = new Date("Dec 25 ,2015").getTime();
// var differ = dated  - nowmili  
// var totalSec = differ / (1000)
// totalSec = Math.floor(totalSec)
// document.write(`on reference Date ${now} <br> ${totalSec} Seconds had passed since beginning of 2015 `)


// Question # 11

// var now = new Date();
// var oneHours = now.setHours()
// document.write(now)    
// document.write(oneHours)    

// Question # 12

// var now = new Date()
// var year = new Date()
// year.setFullYear(1915)
// alert(`TODAY : ${now} \n 100 years Back : ${year}`)
// console.log(year)

// Question # 13

// var age = +prompt("Your age ?");
// var now = new Date().getFullYear()
// var ageCalc = now - age
// document.write(`YOUR Age is: ${age} <br>
//                 Your Birth Year is: ${ageCalc}`)




// Question # 14

// var dated = new Date();
// var month = dated.getMonth();
// var ConsumerName = "ABC"
// var unitNum = 410;
// var chargesPerUnit = 16;
// var netAmount = unitNum * chargesPerUnit;  
// var lateCharges = 350 ; 
// var grossAmount = netAmount + lateCharges;
// document.write(`<b>K - ELECTRIC BILL </b> <br />
//                 Customer Name : ${ConsumerName} <br>
//                 Month : ${month} <br>
//                 Numbers of units : ${unitNum} <br>
//                 Chages per unit: ${chargesPerUnit} <br>
//                 <br>
//                 <br>
//                 Net Amount : (With in due Date: ) ${netAmount} <br>
//                 Late Charges : ${lateCharges} <br>
//                 Groos Amount : ${grossAmount}`)

