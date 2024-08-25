

let h2=document.getElementById("count-el");
let IncrementBtn=document.getElementById("increment-btn");
let saveBtn=document.getElementById("save-btn");
let saveEl=document.getElementById("save-el");
let welcomeEl=document.getElementById("welcome-el");
let count=0;
//addeventListener
IncrementBtn.addEventListener("click",()=>{
    count+=1;
    // h2.innerTex=count;
     h2.textContent=count;
});
saveBtn.addEventListener("click",()=>{
    // console.log(count);
    // console.log("Count is savved");
   
    let entries=count+ " - ";
   
saveEl.textContent+=entries;
count=0;
h2.textContent=0;

// console.log(saveEl);
});
//creating a variable for previous entries


let name="taran";
let greeting="Welcome";
let myGreeting=greeting+ name;
welcomeEl.innerText=myGreeting;
welcomeEl.innerText+="👋";

// function save(){
//     console.log(count);
// }



// function Increment(){
//     count=count+1;
   
// // console.log(count);
// h2.innerText=count;
// }


//example
// let myAge=21;
// let humanDogRatio=7;
// let myDogAge=21*7;
// console.log(myDogAge);



//expample2
// let bonusPoints=50;
// bonusPoints=bonusPoints+50;
// bonusPoints=bonusPoints-75;
// bonusPoints=bonusPoints+45;
// console.log(bonusPoints);



//example3:
// function increment(){
//     let count=0;
//     //console.log("button was clicked");
// }

//example4
// function logNumber(){
//     let number=42;
//     console.log(number);
// }
// logNumber();
// logNumber();

//example5
// let lap1=34;
// let lap2=33;
// let lap3=36;
// function logLaptime(){
//     let totalTime=lap1+lap2+lap3;
//     console.log(totalTime);

// }
// logLaptime();

//example 5:
// let lapsCompleted=0;
// function lapsIncrement(){
// lapsCompleted=lapsCompleted+1;

// }
// lapsIncrement();
// lapsIncrement();
// lapsIncrement();
// console.log(lapsCompleted);

//example 6:
//STRINGS
// let username="taran";
// let message="You have three new notifications";
// console.log(message+","+username);
// let messageToUser=message+","+username;
// // let messageToUser=`${message}`+","+` ${username}`;
// console.log(messageToUser);

//example 7:
// let name="42";
// let greeting="hii, my name is ";
// let myGreeting=greeting+""+ name;
// console.log(myGreeting);


//example 8:
// let points=4;
// let bonusPoints="10";
// let totalPoints=points+bonusPoints;
// console.log(totalPoints);
// console.log(typeof(totalPoints));

//example 9:
// console.log(4+5);
// console.log("2"+"4");
// console.log("5"+1);
// console.log(100+"100");

