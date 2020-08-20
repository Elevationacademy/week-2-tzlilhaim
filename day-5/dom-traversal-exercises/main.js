// ----------------------Learn----------------------
// Spot Check 1
const printText = $("button:contains(Print)").on("click", function () {
    const text = $(this).closest("div").find("span").text()
    console.log(text)
})

// Spot Check 2
const printParagraph = $("button:contains(Get That)").on("click", function () {
    const text = $(".container").find("p").text()
    console.log(text)
})

// ----------------------Apply----------------------
// Exercises
const cmpIdArr = []

const getGenerator = $("button.generator").on("click", function () {
    const processorId = $(this).closest("div.processor").attr("id")
    console.log("Processor ID: " + processorId)

    const commputer = $(this).closest("div.computer")
    console.log("Computer's data-id: " + commputer.data().id)
    console.log("BUS: " + commputer.find(".BUS").text())

    cmpIdArr.push({ cmp_id: commputer.data().id })
})

const getValidator = $("button.validator").on("click", function () {
    const computer = $(this).closest("div.computer")

    const generatorTxt = computer.find(".generator").text()
    console.log("Generator's text: " + generatorTxt)

    const mb = computer.find("p.MB").text()
    console.log("MB: "+mb)

    const qrArr = computer.find(".QR").toArray()
    console.log("QR 1: " + qrArr[0].innerHTML)
    console.log("QR 2: " + qrArr[1].innerHTML)
})