// -------------------------Learn-------------------------
// Spot Check 1
const header = $("h1")
console.log("Spot check 1: " + header)

// Spot Check 2
$("h1").css("color", "blue")
$(".red-div").css("background-color", "red")
$("li:first").css("color", "green")
$("li:nth-child(2n)").css("color", "pink")
$("#brown-div").css("background-color", "brown")

// Spot Check 3
$("#b1").addClass("box")
$("#b2").addClass("box")

// Spot Check 4
$("#my-input").val("Terbyte")

// Spot Check 5
const data = $("div:last").data()
console.log("Spot Check 5: " + "Item with barcode " + data.barcode + " will expire on " + data.expirationdate)

// Spot Check 6
const div = $("#blue-on-hover")
div.on("mouseover", function () {
    div.css("background-color", "blue")
})

// Spot Check 7
$("button:contains(Click Me!)").on("click", function () {
    alert($("#spot-check-7").val())
})

// Spot Check 8
const divsToHover = $(".box")
divsToHover.hover(function () {
    $(this).css("background-color", "blue")
})

// Spot Check 9
$(".feedme").on("click", function () {
    let divCopy = `<div class=feedme>${$(this).text()}</div>`
    $("#spot-check-9-body").append(divCopy)
    //$("body").append(divCopy)
    // Note: writing to div instead of body so it won't clash with other exercises
})

// Spot Check 10
const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
]

for (let name of names) {
    $("#spot-check-10-body").append($(`<div class='human'>${name.first} - ${name.last}</div>`))
    //$("body").append($(`<div class='human'>${name.first} - ${name.last}</div>`))
}

// Spot Check 11
$(".spot-check-11").hover(function () {
    $(this).remove()
})

// Spot Check 12
$("button:contains(Post Blog)").on("click", function () {
    const text = "divs inner text"
    $("#blogs").append($(`<div class="blog">${text}</div>`))
})

/*
$("#blogs").on("click",function(){
    $(".blog").text("blargh") 
})
*/

// Spot Check 13
$("#blogs").on("click", ".blog", function () {
    $(this).text("blargh")
})

// -------------------------Apply-------------------------
// Exercise 1
$("#exercise-1-body").append(`<input type="text" placeholder="Human Name"><button type="button">Add Human</button>`)
$("#exercise-1-body").on("click", "button", function () {
    const input = $("#exercise-1-body input")
    if (input.val() !== "") {
        $("#exercise-1-body ul").append(`<li>${input.val()}</li>`)
        input.val(null)
    }
})

// Exercise 2
$("#exercise-1-body").on("click", "li", function () {
    $(this).remove()
})

// Exercise 3
// Create the 2 boxes and append to body
$("#exercise-3-body").append($(`<div class='box-exercise-3'></div>`))
$("#exercise-3-body").append($(`<div class='box-exercise-3'></div>`))

// On hover listener
$(".box-exercise-3").hover(function () {
    $(this).siblings(".box-exercise-3").css("background-color", "red")
    $(this).css("background-color", "purple")
})

// Exercise 4 & Extension
const getItemInCartCount = (itemText) => {
    const cartItemsArr = $("#cart").find(".cart-item").toArray()

    let itemCount = 0
    let i = 0
    while (!itemCount && i < cartItemsArr.length) {
        if ($(cartItemsArr[i]).text().includes(itemText)) {

            // Get quantity of this item in the cart
            if ($(cartItemsArr[i]).text().includes("x")) {
                const xIndex = $(cartItemsArr[i]).text().indexOf("x")
                itemCount = parseInt($(cartItemsArr[i]).text().slice(xIndex + 1))
            } else {
                itemCount++
            }
        } else {
            i++
        }
    }
    return itemCount
}

$(".item").on("click", function () {
    if ($(this).data().instock) {
        
        // Get quantity of this item in the cart
        const itemCount = getItemInCartCount($(this).text())

        if (itemCount) {
            const item = $(`div:contains(${$(this).text()}).cart-item`)

            // change text
            $(item).text(`${$(this).text()} x${itemCount + 1}`)
        } else {

            // If doesn't exist yet, create this element and append to cart
            $("#cart").append(`<div class='cart-item'>${$(this).text()}</div>`)
        }
    }
})

// Remove item from cart on click
$("#cart").on("click", ".cart-item", function () {

    // Get quantity of this item in the cart
    const itemCount = getItemInCartCount($(this).text())

    if (itemCount == 1) {

        // If there's only one, remove altogether
        $(this).remove()
    } else {
        const xIndex = $(this).text().indexOf("x")
        const itemName = $(this).text().slice(0, xIndex - 1)
        if (itemCount == 2) {

            // If there are two, change text - remove count
            $(this).text(itemName)
        } else {

            // If there are more than 2 items, decrease amounnt by 1
            $(this).text(`${itemName} x${itemCount - 1}`)
        }
    }
})

// Exercise 5
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]

for (fruit of fruits) {
    $("#basket").append(`<div class='${fruit.color}'>${fruit.name}</div>`)
}

// Extension - Color Picker
for (color of $("#colors").children().toArray()) {
    $(color).addClass("picker")
    $(color).css("background-color", $(color).text().toLowerCase())
}

$(".picker").on("click", function () {
    $(".box-exercise-6").css("background-color", $(this).data().color)
})