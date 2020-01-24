// let Rosie = {                  
//     _name: "Rosie",
//     _hops: 0,
    
//     get name() {
//     return this._name;
//     },
    
//     get hops() {
//     return this._hops;
//     },
    
//     increaseHops() {
//     this._hops++;
//     }
// }

// //this is cool but what if we want multiple bunnies?
// //we use constructors  constructor(){}

// class Bunny{                 //classes need capital letters 
//     constructor(name){
//     this._name = name;       //in the constructor method we add one argument, name
//     this._hops = 0;
//     }
//     get name(){               
//     return this._name;
//     }
//     get hops(){
//     return this._hops;
//     }
//     increaseHops(){
//     this._hops++;
//     }
// }

// const rosie = new Bunny("Rosie");      
// const lizzie = new Bunny("Lizzie");

// console.log(rosie.name);
// console.log(lizzie.hops);

// Let’s create a class called Cars for a car parking
// company.

// This will allow you to store information of: car
// registration number, number of hours parked and total
// amount charged. (Say £1.50 per hour?)

// The first car entered the car park, parked for 5 hours
// and ready to pay. Display this information so the driver
// can pay for his/her parking fee.
class Car {
    constructor(regnum){
        this._regnum = regnum;
        this._hours = 0
        this._charge = 0.00
    }
    get regnum(){
        return this._regnum
    }
    get hours(){
        return this._hours
    }
    get charge(){
        return this._charge
    }
    increaseHours(h){
        this._hours = h;
        this._charge = h * 1.50;
    }
}
    
class Staff extends Car {
    constructor(regnum, staffNum, staffCredit){
      super(regnum);
      this._staffNum = staffNum
      this._staffcredit = staffCredit
    }
    get staffNum(){
        return this._staffNum 
        }
    get staffCredit(){
        return this._staffcredit
    }
    creditBlance(){
        return this.staffCredit - this._charge;
    }             
}    

const staffMember = new Staff ("RS6", 1123 , 20);

console.log(`Before increased hours the charge is ${staffMember._charge}`);
staffMember.increaseHours(5);

console.log(`After increased hours the charge is ${staffMember._charge}`);

let finalBalance = staffMember.creditBlance(); 

console.log(`After parking 5 hours the employee regNumber ${staffMember.regnum} and Staffnum ${staffMember._staffNum} final credit is ${finalBalance}`);
