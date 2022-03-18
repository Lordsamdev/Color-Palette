let firstColor = document.getElementById("select1") // stores the value of the first color picker by its id
let firstDivColor = document.getElementById("color1") // the value of the first box in the palette
let firstColorText = document.getElementById("txt-1") // the value of the text in the first box in the palette


let secondColor = document.getElementById("select2") // stores the value of the second color picker by its id
let secondDivColor = document.getElementById("color2") // the value of the second box in the palette
let secondColorText = document.getElementById("txt-2") // the value of the text in the second box in the palette

let thirdColor = document.getElementById("select3") // stores the value of the third color picker by its id
let thirdDivColor = document.getElementById("color3") // the value of the third box in the palette
let thirdColorText = document.getElementById("txt-3") // the value of the text in the third box in the palette

let fourthColor = document.getElementById("select4") // stores the value of the fourth color picker by its id
let fourthDivColor = document.getElementById("color4") // the value of the fourth box in the palette
let fourthColorText = document.getElementById("txt-4") // the value of the text in the fourth box in the palette

firstColor.addEventListener("change", function(){ // event listener for the first color picker, we use the change event
    firstDivColor.style.backgroundColor = firstColor.value // this code sets the background color of the first box 
                                                            //to the value of the first color picker
    firstColorText.textContent = firstColor.value // this code sets the text content of the box to the value of the 
                                                  //first color picker
    console.log(firstColor.value) // for debugging purposes
})

secondColor.addEventListener("change", function(){ 
    secondDivColor.style.backgroundColor = secondColor.value
    secondColorText.textContent = secondColor.value
    console.log(secondColor.value)
})

thirdColor.addEventListener("change", function(){
    thirdDivColor.style.backgroundColor = thirdColor.value
    thirdColorText.textContent = thirdColor.value
    console.log(thirdColor.value)
})

fourthColor.addEventListener("change", function(){
    fourthDivColor.style.backgroundColor = fourthColor.value
    fourthColorText.textContent = fourthColor.value
    console.log(fourthColor.value)
})


let buttonOne = document.getElementById("btn-1") // event listner for the copy button
buttonOne.addEventListener("click", function(){ // using the click event
    navigator.clipboard.writeText(firstColor.value) // this code copies the value of the first color
    alert(`Color: ${firstColor.value} copied to clipboard!`) // alert to show that the first color has been copied
})


let buttonTwo = document.getElementById("btn-2")
buttonTwo.addEventListener("click", function(){
    navigator.clipboard.writeText(secondColor.value)
    alert(`Color: ${secondColor.value} copied to clipboard!`)
})

let buttonThree = document.getElementById("btn-3")
buttonOne.addEventListener("click", function(){
    navigator.clipboard.writeText(thirdColor.value)
    alert(`Color: ${thirdColor.value} copied to clipboard!`)
})

let buttonFour = document.getElementById("btn-4")
buttonFour.addEventListener("click", function(){
    navigator.clipboard.writeText(fourthColor.value)
    alert(`Color: ${fourthColor.value} copied to clipboard!`)
})