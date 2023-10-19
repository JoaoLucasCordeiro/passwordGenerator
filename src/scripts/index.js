const passwordInput = document.querySelector(".containerBox input")
const copyButton = document.querySelector(".containerBox button")
const rangeInput = document.querySelector(".rangeBox input")
const sliderNumber = document.querySelector(".rangeBox .sliderNumber")
const generateButton = document.querySelector("#button")

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~"

const generatePassword = () => {
    let newPassword = ""

    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumbers = Math.floor(Math.random() * allCharacters.length)
        newPassword += allCharacters[randomNumbers]
    }
    passwordInput.value = newPassword
}

// pegando valor do input range
rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value
    generatePassword()
})

generateButton.addEventListener("click", generatePassword)

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value)
})


generatePassword()