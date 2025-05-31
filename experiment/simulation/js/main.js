
let start = document.getElementById('start')
let vedio_box = document.getElementById("vedio-box-1")
let first_image = document.getElementById('image-1')
let operatus = document.getElementById('operatus')
let massage = document.getElementById('massage')
massage.innerText = "Click on Start"
operatus.style.display = "none"





let bleaching_Powder = document.getElementById('Bleaching-Powder')

let potasium_Iodide = document.getElementById('Potasium-Iodide')

let acetic_Acid = document.getElementById('Acetic-Acid')


let titraion = document.getElementById('Titraion')
// burnner.style.display = "none"

let starch = document.getElementById('starch')

let sec_titration = document.getElementById('Titraion-2')
// smach.style.display = "none"

let reaction = document.getElementById("reaction")
reaction.innerText = ""

// Table

let data_one = document.getElementById("data-1")
let data_two = document.getElementById("data-2")
let data_three = document.getElementById("data-3")
let data_four = document.getElementById("data-4")

// data_one.parentNode.removeChild(data_one)
// data_two.parentNode.removeChild(data_two)
// data_three.parentNode.removeChild(data_three)
// data_four.parentNode.removeChild(data_four)
// data_four.parentNode.removeChild(data_four)





start.addEventListener('click', () => {
    start.classList.add('hide')
    vedio_box.classList.add('show')
    first_image.classList.add("show")

    
    operatus.style.display = "block"
    massage.innerText = `Add 25ml Bleaching Powder Solution`
        

})



let first_vedio = document.getElementById('vedio-1')
let second_vedio = document.getElementById('vedio-2')
let third_vedio = document.getElementById('vedio-3')
let four_vedio = document.getElementById('vedio-4')
let five_vedio = document.getElementById('vedio-5')
let six_vedio = document.getElementById('vedio-6')


document.getElementById('Bleaching-Powder').addEventListener('click', () => {
    first_image.classList.remove("show")

    first_vedio.style.display = "block"
    second_vedio.style.display = "none"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "none"

    setTimeout(() => {
        massage.innerText = "Add Potassium Iodide"
    },3000);

})

document.getElementById('Potasium-Iodide').addEventListener('click', () => {

    first_image.classList.remove("show")

    first_vedio.style.display = "none"
    second_vedio.style.display = "block"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "none"

    setTimeout(() => {
        massage.innerText = "Add Acetic Acid"
    },5000);


})

document.getElementById('Acetic-Acid').addEventListener('click', () => {

    first_image.classList.remove("show")

    first_vedio.style.display = "none"
    second_vedio.style.display = "none"
    third_vedio.style.display = "block"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "none"

    reaction.innerHTML = "<p>CaOCl<sub>2</sub> + 2CH<sub>3</sub>COOH + 2KI ==> 2CH<sub>3</sub>COOK + CaCl<sub>2</sub> + I<sub>2</sub> + H<sub>2</sub>O </p>"

    setTimeout(() => {
        massage.innerText = "Start Titration"

    },4000);

})


document.getElementById('Titraion').addEventListener('click', () => {


    first_image.classList.remove("show")

    first_vedio.style.display = "none"
    second_vedio.style.display = "none"
    third_vedio.style.display = "none"
    four_vedio.style.display = "block"
    five_vedio.style.display = "none"
    six_vedio.style.display = "none"

    reaction.innerHTML = "<p>2Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + I<sub>2</sub> ==> Na<sub>2</sub>S<sub>4</sub>O<sub>6</sub> + NaI</p>"


    setTimeout(() => {
        massage.innerText = "Add 1ml Starch"

    },3000);

})

document.getElementById('starch').addEventListener('click', () => {


    first_image.classList.remove("show")

    first_vedio.style.display = "none"
    second_vedio.style.display = "none"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "block"
    six_vedio.style.display = "none"

    reaction.innerHTML =  " "

    setTimeout(() => {
        massage.innerText = "Start Reverse Titration "

    },3000);

})

document.getElementById('Titraion-2').addEventListener('click', () => {

    first_image.classList.remove("show")

    first_vedio.style.display = "none"
    second_vedio.style.display = "none"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "block"

    reaction.innerHTML =  "<p>2Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + 2KI ==> Na<sub>2</sub>S<sub>4</sub>O<sub>6</sub> + 2NaI + 2KCl </p>"

    showNextTrial()
    addDataAndShow()


    setTimeout(() => {
        massage.innerText = "Compalete"
        alert("Repeat The Process for more Obersvation")
        window.location.reload()

    },4000);

})

let currentTrial = 0;
function showNextTrial() {
    const rows = document.querySelectorAll('.data-row');
    if (currentTrial < rows.length) {
        rows[currentTrial].style.display = 'table-row';
        currentTrial++;
    } else {
        alert("All trials are already shown");
    }
}

// Add data 

const data = [
    [1, 25, 0, 24.5, 24.5],
    [2, 25, 0, 25, 25],
    [3, 25, 0, 24.5, 24.5],
    [4, 25, 0, 25.5, 25.5],
]

let currentRow = 0;

function addDataAndShow() {
    const rows = document.querySelectorAll('.data-row');

    if (currentRow < rows.length) {
        const cells = rows[currentRow].querySelectorAll('td');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = data[currentRow][i];
        }

        rows[currentRow].style.display = 'table-row';
        currentRow++;
    } else {
        alert("All rows are filled and visible.");
    }
}








