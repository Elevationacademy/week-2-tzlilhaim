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
$("#exercise-1-body").on("click","li",function(){
    $(this).remove()
})
