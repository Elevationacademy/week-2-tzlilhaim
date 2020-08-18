// ----------------------------Learn----------------------------
// Spot Check 2
let users = []

const getData = function (display) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        display()
    }, 3000);
}

const displayData1 = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData1)

// Spot Check 3
setInterval(function () {
    console.log(new Date())
}, 1000)

// Spot Check 4
const square = number => console.log(number * number)
square(4)

// Spot Check 5
getFormalTitle = (title, name) => console.log(title + " " + name)
getFormalTitle("Madamme", "Lellouche")

//----------------------------Apply----------------------------
// Exercise 1
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = func => func()
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

// Exercise 2
const getTime = func => {
    const time = new Date()
    func(time)
}

const returnTime = function (time) {
    alert('The current time is: ' + time)
}

getTime(returnTime)

// Exercise 3
const logData = data => console.log(data)
const alertDataFunc = data => alert(data)

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

displayData(alert, logData, "I like to party")

// Exercise 4
const sum = (num1, num2, num3) => console.log(num1 + num2 + num3)
sum(10, 20, 30)

// Exercise 5
const capitalize = string => console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

// Exercise 6
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => console.log("it's " + determineWeather(temp))
commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

// Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

const makeSound = sound => alert(sound)

explode(shineLight, makeSound, "BOOM")