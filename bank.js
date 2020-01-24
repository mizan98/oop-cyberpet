class Bank {
    constructor (userPin){
        this._pin = 1123
        this._balance = 500
        this._userPin = userPin
    }
    withdrawal (withdrawAmount) {
        if (withdrawAmount < 500) {
            this._remaining = this._balance - withdrawAmount
                alert (`You have requested £${withdrawAmount} here is your remaining balance £${this._remaining}`)
                return withdrawAmount
        }
        else if (withdrawAmount > 500){
            alert (`Insufficient funds requested please request an amount below ${this._balance}`)
            prompt (`Please enter an amount equal to or below £${this._balance}.`)
        }
       } 
    checkPin() {
        if( this._userPin == this._pin ) {
                alert(`this is the right pin`)
                alert (`Here is your balance £${this._balance}`)
            } 
            else {
                alert(`this is the wrong pin. Please enter the correct pin`)
            let attempt2 = prompt ("Incorrect pin. Please try again")
            attempt2 = parseInt(attempt2)
            let retry = new Bank (attempt2)
            retry.checkPin()
            }   
        
    }
}
// class Customer extends Bank{
//     constructor
// }

let request1 = prompt (`Welcome to Lloyds Bank. Please enter your pin to enter the account`) //prompt always ceates strings

request1 = parseInt(request1); //causes the string of pin to turn to value

let customer1 = new Bank(request1)

customer1.checkPin()

let withdrawAmount = prompt ("How much would you like to withdraw?")
withdrawAmount = parseInt(withdrawAmount)
withdrawal(withdrawAmount)
            