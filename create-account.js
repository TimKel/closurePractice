function createAccount(pin, amount=0) {
    return {
        checkBalance(pinNum){
            if(pinNum !== pin) return "Invalid PIN";
            return `Current Balance is ${amount}`
        },
        deposit(pinNum, depositAmount){
            if(pinNum !== pin) return "Invalid PIN";
            if(depositAmount <= 0) return "Please deposit more than $0";
            if(pinNum === pin && depositAmount > 0){
                let newAmt = amount += depositAmount;
                return `Deposited ${depositAmount}. New balance is ${newAmt}`
            }
        },
        withdraw(pinNum, withdrawalAmount){
            if(pinNum !== pin) return "Invalid PIN"
            if(withdrawalAmount > amount) return "Insufficient funds"
            amount -= withdrawalAmount;
            return `Withdrawing ${withdrawalAmount}. New balance is ${amount}.`
        },
        changePin(oldPin, newPin){
            if(oldPin !== pin) return "Incorrect original PIN";
            pin = newPin;
            return "New PIN has been saved."
        }
    }

}

module.exports = { createAccount };
