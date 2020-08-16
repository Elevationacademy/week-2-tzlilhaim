// ------------------------------------ Learn ------------------------------------
// Spot Check 1
const person1 = {
    username: "Felicia",
    introduce: function () {
        console.log("Hi, I'm " + this.username)
    }
}

person1.introduce()

// ------------------------------------ Apply ------------------------------------
// Exercise 1
const person = {
    hungry: true,
    feed: function () {
        if (this.hungry) {
            this.hungry = false;
            alert('Im no longer hungry!')
        }
    }
}

person.feed() //should alert "I'm no longer hungry"

// Exercise 2
const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
    car1: {
        name: 'Audi',
        liters: 3,
        fillTank: pump
    },
    car2: {
        name: 'Mercedes',
        liters: 1,
        fillTank: pump
    }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

// Exercise 3
const pumpFuel = function (plane) {
    plane.fuel += 1;
};

const airplane = {
    fuel: 0,
    fly: function () {
        if (this.fuel < 2) {
            return 'on the ground!';
        }
        else {
            return 'flying!';
        }
    }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());

// Exercise 4
const tipJar = {
    coinCount: 20,
    tip: function () {
        this.coinCount += 1;
    },
    stealCoins: function (amount) {
        tipJar.coinCount = tipJar.coinCount - amount
    }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

// Exercise 5
const revealSecret = function () {
    return this.secret;
};

const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
};

const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
};

const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

// Exercise 6
const coffeeShop = {
    beans: 40,
    pricePerBean: 5,
    money: 40,

    drinks: {
        latte: { drinkRequirements: 10, price: 5 },
        americano: { drinkRequirements: 5, price: 3 },
        doubleShot: { drinkRequirements: 15, price: 10 },
        frenchPress: { drinkRequirements: 12, price: 8 }
    },

    makeDrink: function (drinkType) {
        debugger
        // If this drink type exists
        let drinkTypes = Object.keys(this.drinks)
        if (drinkTypes.includes(drinkType)) {

            // If there are enough beans, make drink.
            let remainingBeans = this.beans - this.drinks[drinkType].drinkRequirements
            if (remainingBeans < 0) {

                // If not enough beans, purchase the required amount of beans for the drink
                alert("Not enough beans to fill this order. Attempting to purchase the missing amount")
                remainingBeans = remainingBeans - this.buyBeans(-remainingBeans)

                // Check again and alert if purchase failed
                if (remainingBeans < 0) {
                    alert("Sorry, we're all out of beans, and we cannot buy more")
                }
                else {
                    this.beans = remainingBeans
                    alert("Here's your " + drinkType)
                }
            } else {

                // Make drink and update remaining beans
                this.beans = remainingBeans
                alert("Here's your " + drinkType)
                return true
            }
        } else {

            // Alert user if drink doesn't exist
            alert("Sorry, we don't make " + drinkType)
        }

    },
    buyBeans: function (numBeans) {

        // If there's enough money, buy request amount of beans
        moneyAfterPurchase = this.money - (numBeans * this.pricePerBean)

        if (moneyAfterPurchase < 0) {
            alert("Not enough money. You need " + (-moneyAfterPurchase) + " more coins.")
        } else {
            this.money = moneyAfterPurchase
            this.beans += numBeans
            alert("You've purchased " + numBeans + " beans. You now have total " + this.beans + " beans and " + this.money + " coins")
        }
    },
    buyDrink: function (drinkType) {
        debugger

        // If drink was ade successfully
        if (this.makeDrink(drinkType)) {

            // Add costumer's payment to shop's money
            this.money += this.drinks[drinkType].price
            alert("Drink sold! You've made " + this.drinks[drinkType].price + " coins on this sale. Now the shop has total " + this.money + " coins.")
        }
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(10);
coffeeShop.buyDrink("doubleShot")