function updateClock() {
    const timeElemnt = document.getElementById("time")
    const dateElement = document.getElementById("date")

    const now = new Date()

    const hours = now.getHours() % 12 || 12 
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    const ampm = now.getHours() >= 12 ? "PM" : "AM"

    timeElemnt.textContent = `${hours}:${minutes}:${seconds} ${ampm}`
    dateElement.textContent = now.toLocaleDateString(undefined, {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })
}


/*
    const time = 0 || 12
    console.log(time)
        `0 || 12 => 12` :  12 % 12 == 0
        we have to show:: `12 bje hai`
*/

/*
    We want always: 2 digits 
    otherwise, screen shrink hoga
        1. now.getMinutes().toString().padStart(2, "0")
        2. minutes < 10 ? `0${minutes}`: `${minutes}`
 */


setInterval(updateClock, 1000)
updateClock()