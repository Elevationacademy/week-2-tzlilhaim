// -------------------------Learn-------------------------
// Spot Check 1

const Family = function () {
    const members = []
    const birth = function (name) {
        members.push(name)
        console.log(members)
    }
    return birth
}

const giveBirth = Family()
giveBirth("Jane")
giveBirth("Bob")

// Spot Check 2
const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const m = mathOperations()
console.log(m.add(13, 29))
console.log(m.mult(1.75, 24))
console.log(m.mult(7, m.div(36, 6)))

// Spot Check 3
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()
usersModule.addUser('Gertrude')
usersModule.addUser('Jerad')
usersModule.listUsers()
console.log(usersModule.users) // prints undefined

// -------------------------Apply-------------------------
// Exercise 1
const StringFormatter = function () {
    const capitalizeFirst = string => console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
    const skewerCase = string => console.log(string.replace(/ /g, "-"))

    return{
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

// Exercise 2
const Bank = function () {
    let money = 500
    const depositCash = cash => money += cash
    const checkBalance = () => console.log(money)

    return{
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// Exercise 3
const SongsManager = function () {
    const songs = {
        "sax": "3JZ4pnNtyxQ",
        "how long": "CwfoyVa980U"
      }
    const addSong = (songTitle, songUrl) => songs[songTitle] = songUrl.slice(32)
    const getSong = song => console.log("https://www.youtube.com/watch?v=" + songs[song])

    return{
        addSong,
        getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long")
songsManager.getSong("ain't me")
