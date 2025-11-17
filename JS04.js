// let marks = parseInt(prompt("Enter your marks"));

// let per = (marks*100)/1000;

// switch (true) {
//     case per>=90:
//         console.log("Grade A");
//         break;
//     case per>=80:
//         console.log("Grade B");
//         break;
//     case per>=70:
//         console.log("Grade C");
//         break
//     default:
//         console.log("You are Fail");
//         break;
// }   

let pin = 1234;
let balance = 50000;
let userPin = parseInt(prompt("Enter Your Pin"))

console.log("**Welcome To Mezan Bank**");

if (userPin != pin) {
    console.log("Invalid Pin");
}else if (userPin === pin) {
    console.log("Welcome Uswa Matloob");
    console.log("Choose below cases for your operations");
    console.log("01. Transaction");
    console.log("02. Debit Money");   
    console.log("03. Exit");
} 
let choice = parseInt(prompt("Enter Your Choice"))
switch (choice){
    case 1:
        let transAmount = parseInt(prompt("Enter your Amount"));
        let remBalance = balance-transAmount;
        console.log(`Your Transaction of ${transAmount} is successful. Your remaining Balance is ${remBalance}`);
        break;
    case 2:
        let AddAmount = parseInt(prompt("Add your Amount"));
        let totalBalance = balance+AddAmount;
        console.log(`Your Transaction of ${AddAmount} is successful. Your remaining Balance is ${totalBalance}`);
        break;
    default:
        console.log("Exit Account");
        break;
}