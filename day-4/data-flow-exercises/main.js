// Recap Exercise
const posts = [
    { name: "John Doe", text: "Breakfasts are called breakfasts because they break your overnight fast" },
    { name: "Jane Doe", text: "It feels like we only go backwards" }]

const render = () => {
    const wall = $("#wall")
    let wallUpdate = ``
    for (let post of posts) {
        wallUpdate += `<div class='posts'>${post.name + ": " + post.text}</div>`
    }
    wall.empty()
    wall.append(wallUpdate)
}

render()

$("button:contains(submit)").on("click", function () {
    let name = $("input:first")
    let text = $("input:nth-child(2)")
    if (name.val().length && text.val().length) {
        posts.push({ name: name.val(), text: text.val() })
        $("input").val(null)
    }
    render()
})