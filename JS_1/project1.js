const promt = require("prompt-sync")();

const deposit = () => {
    while(true) {
        const depositAmount = ("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0 ){
            console.log("Invalid deposit amount, try again.");
        } 
        else {
            return numberDepositAmount;
        }
    }
}