class Cyberpet {
    constructor(name,type){
        this._name = name
        this._type = type
        this._food = [
            "meat",
            "fish",
            "garbage"
        ]
        this._drink = [
            "water",
            "juice",
            "Red Bull"
        ]
        this._hunger = 100
        this._thirst = 100
    }
    eat(food){
        if (food == this._food[0]){
            this._hunger -= 50
            alert(`your ${this._name} has eaten ${this._food[0]}. Hunger levels are now ${this._hunger}`)
            return this._hunger
        }
        else if (food == this._food[1]){
            this._hunger -= 40
            alert(`your ${this._name} has eaten ${this._food[1]}. Hunger levels are now ${this._hunger}`)
            return this._hunger
        }
        else if (food == this._food[2]){
            this._hunger
            alert(`your pet ${this._name} has gotten food poisening and has discombobulated.`)
            return this._hunger
        }
        else {
            alert("your pet has died of starvation. FIX UP!!")
        } 
    }
    drink(d){
        if (d == this._drink[0]){
            this._thirst - 50
            alert(`your pet ${this._name} is fully quenched. Well done!`)
            return this._thirst
        }
        else if (d == this._drink[1]){
            this._thirst - 20
            alert(`your pet ${this._name} cannot drink that! Please give it some ${this._drink[0]}.`)
            return this._thirst
        }
        else if(d == this._drink[2]){
            this._thirst - 100
            alert(`your pet ${this._name} has gotten diabetes from the sugar please see a vet`)
            return this._thirst
        }
        else {
            alert(`your pet ${this._name} has died of thirst. You will be charged with animal abuse.`)
        }
    }
}
class Boredom extends Cyberpet {
    constructor (name, hunger, thirst){
    super (name, hunger, thirst)
    this._boredom = [
        "fetch",
        "tickle",
        "Xbox"
    ]
    }
    playtime (fun) {
        if (fun == this._boredom[0]){
            alert(`your pet ${this._name} does not play such trivial games`)
        }
        else if(fun == this._boredom[1]){
            alert(`your pet ${this._name} is not that easy to impress.`)
        }
        else if(fun == this._boredom[2]){
            alert(`this is what were talking about! your pet ${this._name} has beaten you 10-2 1v1 no scope challenge on mw2 rust`)
        }
        else {
            alert(`your pet left you out of sheer boredom`)
        }
    }
}
let petName = prompt (`Choose your pet name:`)
            alert (`Congratulations! your new pet is called: ${petName}`)
let petType = prompt (`Choose the type of pet you would like to have:`)
            alert (`Congratulations! Your new pet is a ${petType}`) 
const newPet = new Boredom (petName, petType)
console.log(newPet)
let foodType = prompt (`Your pet ${newPet._name} is now hungry. Its current hunger levels are ${newPet._hunger}.Choose to feed it either: "meat", "fish", "garbage":`)
        newPet.eat(foodType.toLowerCase())
let drinkType = prompt (`Your pet's thirst levels are now ${newPet._thirst}. Choose between: "water", "juice" and "red bull".`)
        newPet.drink(drinkType.toLowerCase())
let funTime = prompt (`Your pet is now bored to death. Choose to play either: "fetch", "tickle" or "xbox".`)
        newPet.playtime(funTime.toLowerCase())
