#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance=100000;
let mypin =65221;
let pinAnswer=await inquirer.prompt({
        name:"pin",
        message:"Enter your pin",
        type:"number",
    }
);
   if(pinAnswer.pin===mypin){
    console.log('Your pin is correct');
     let operationAnswer=await inquirer.prompt(
     [{
        name:"operation",
        message:"select this option ",
        type:"list",
        choices:["withdraw","fast cash","check balance"]}]
         );//if user select withdraw option
      
      
         if (operationAnswer.operation === "withdraw") {
               let amountAns=await inquirer.prompt({
    name:'amount',
    message:"Enter Your Amount",
    type:'number'
           });if (amountAns.amount<=mybalance) {
                let balance= mybalance-amountAns.amount;
             console.log(`There remaining balance is ${balance}`);
          }
      else{console.log(`sorry your balance is insufficient`);
  }}
  //if user select fastcash option
          
  
  if (operationAnswer.operation==="fast cash") {
           let fastcashAns=await inquirer.prompt([{
      name:"amount",
      message:"select your amount for withdraw",
      type:"list",
      choices:["80000","70000","60000","50000","4000","30000","20000","10000","5000"]
    }]); 
         if (fastcashAns.amount <= mybalance) {
           let balance2=mybalance-fastcashAns.amount;
      console.log(`There remaining balance is ${balance2}`);
    }
  } //if user selected amount for check balance
  
  
  if (operationAnswer.operation==="check balance"){
    console.log(`your balance is ${mybalance}`)
  }


 }
else{
    console.log(`Your pin is incorrect`);
    
}

