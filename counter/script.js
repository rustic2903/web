let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let removeEL = document.getElementById("remove-btn")
let deletEl = document.getElementById("delete")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - " 
    saveEl.textContent += countStr
    console.log(count)
}

function remove(){
    count -= 1
    countEl.innerText = count
}

function deleteall() {
    count = 0
    countEl.innerText = count
}




