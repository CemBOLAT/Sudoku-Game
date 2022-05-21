const levels = [
    {
        level:1,
        boardCorrect: [
        ["8","3","1",
        "6","7","2",
        "5","4","9"],
       ["6","4","9",
        "5","3","1",
        "8","2","7"],
       ["2","5","7",
        "9","8","4",
        "6","1","3"],
       ["1","5","7",
       "3","9","6",
       "2","8","4"],
       ["4","9","6",
       "2","1","8",
       "7","5","3"],
       ["8","3","2",
        "7","4","5",
        "1","9","6"],
       ["7","6","3",
        "4","1","5",
        "9","2","8"],
       ["1","8","5",
        "9","6","2",
        "3","7","4"],
       ["4","2","9",
        "3","7","8",
        "5","6","1"],],
        boardWeFill: [
            ["8","3","1",
             "6","","",
             "5","",""],
            ["","4","9",
             "5","","1",
             "8","2","7"],
            ["2","5","",
             "9","","",
             "","","3"],
            ["","5","7",
            "3","","",
            "","8","4"],
            ["4","","",
            "","","",
            "","","3"],
            ["","","",
             "7","4","5",
             "1","",""],
            ["","6","",
             "4","","",
             "9","2",""],
            ["1","","",
             "9","","",
             "3","",""],
            ["","2","",
             "","","",
             "5","6","1"],
        ],
        correctAnswerNumber:43
    },
    {
        level:2,
        boardCorrect: [
            ["4","7","9",
            "1","6","2",
            "5","3","8"],
           ["3","1","2",
            "9","5","8",
            "6","7","4"],
           ["6","5","8",
            "7","4","3",
            "2","9","1"],
           ["8","9","1",
           "7","2","6",
           "3","4","5"],
           ["5","2","6",
           "4","3","9",
           "7","8","1"],
           ["4","3","7",
            "8","1","5",
            "9","6","2"],
           ["9","1","3",
            "6","8","7",
            "2","5","4"],
           ["2","4","7",
            "1","9","5",
            "8","6","3"],
           ["5","8","6",
            "3","2","4",
            "1","7","9"],
        ],
        boardWeFill: [
            ["4","7","",
             "","6","2",
             "","",""],
            ["","","",
             "","","",
             "","","4"],
            ["6","","",
             "","4","",
             "2","","1"],
            ["","9","",
            "","","6",
            "","",""],
            ["5","","6",
            "","","",
            "","","1"],
            ["","3","7",
             "","","5",
             "","","2"],
            ["9","","",
             "6","","7",
             "","5",""],
            ["","","",
             "","","",
             "","6","3"],
            ["5","","",
             "","","",
             "","",""],
        ],
        correctAnswerNumber:56  
    },
    {
        level:3,
        boardCorrect: [
            ["5","7","3",
             "6","4","9",
             "1","8","2"],
            ["2","1","6",
             "5","3","8",
             "4","7","9"],
            ["8","4","9",
             "7","1","2",
             "6","3","5"],
            ["8","9","1",
            "3","6","7",
            "4","2","5"],
            ["3","4","5",
            "9","8","2",
            "1","6","7"],
            ["2","6","7",
             "4","5","1",
             "9","8","3"],
            ["7","5","8",
             "9","1","4",
             "2","3","6"],
            ["6","9","1",
             "8","2","3",
             "7","5","4"],
            ["3","2","4",
             "5","7","6",
             "1","9","8"],
        ],
        boardWeFill: [
            ["","","3",
             "","4","",
             "","",""],
            ["2","","",
             "","","",
             "","","9"],
            ["","4","9",
             "7","","",
             "6","",""],
            ["8","","",
            "","6","",
            "","",""],
            ["3","","",
            "","","2",
            "","",""],
            ["","","",
             "","5","1",
             "9","",""],
            ["","5","",
             "","","",
             "","","6"],
            ["","","1",
             "","","",
             "","5",""],
            ["","2","4",
             "","7","",
             "","",""],
        ],
        correctAnswerNumber:59
        
    }
]
let level = 0
let correct = 0
const board = document.querySelector(".board")
const numbers = document.querySelectorAll(".number")
const tutorial = document.querySelector("#tutorial")
const levelDisplay = document.querySelector("#level")
const columnLocation = document.querySelector("#columnLocation")
const rowLocation = document.querySelector("#rowInfo")
const nextLevel = document.querySelector("#button")
function tutorialChange(){
    tutorial.addEventListener("click",()=>{
        tutorial.textContent = "Firstly you choose the number than put the place where you want"
    })
}
tutorialChange()
function setColumnAndRow(){
    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I"
    ]
    for(let i = 1 ; i <= 9 ; i++){
        const location = document.createElement("div")
        location.setAttribute("class","locationColumn")
        columnLocation.appendChild(location)
        location.textContent = i
        const locationRow = document.createElement("div")
        rowLocation.appendChild(locationRow)
        locationRow.textContent = alphabet[i-1]
    }
}
setColumnAndRow()
function setBoard(){
    const levelCreated = document.createElement("div")
    board.appendChild(levelCreated)
    levelCreated.classList.add("level")
    let id = 0
    for(let i = 0 ; i < 9 ; i++){
        const integralPart = document.createElement("div")
        integralPart.setAttribute("class","integralPart")
        integralPart.setAttribute("id",`${i}`)
        levelCreated.appendChild(integralPart)
        for(let m = 0 ; m < 9 ; m++){
            const smallPart = document.createElement("div")
            smallPart.textContent = levels[level]["boardWeFill"][i][m]
            smallPart.setAttribute("name",id)
            id++
            if(levels[level]["boardWeFill"][i][m] != ""){
                smallPart.classList.add("fixed")
            }
            smallPart.classList.add("smallPart")
            integralPart.appendChild(smallPart)
            setBoardClearly(m,smallPart)
        }
    }
}
function setBoardClearly(m,smallPart){
    switch(m){
        case 0:
            smallPart.style.borderLeft = "none"
            smallPart.style.borderTop = "none"
            break;
        case 1:
            smallPart.style.borderTop = "none"
            break;
        case 2:
            smallPart.style.borderTop = "none"
            smallPart.style.borderRight = "none"
            break;
        case 3:
            smallPart.style.borderTop = "none"
            smallPart.style.borderLeft = "none"
            break;
        case 4:
            smallPart.style.borderTop = "none"
            break;
        case 5:
            smallPart.style.borderTop = "none"
            smallPart.style.borderRight = "none"
            break;
        case 6:
            smallPart.style.borderTop = "none"
            smallPart.style.borderLeft = "none"
            smallPart.style.borderBottom = "none"
            break;
        case 7:
            smallPart.style.borderTop = "none"
            smallPart.style.borderBottom = "none"
            break;
        case 8:
            smallPart.style.borderRight = "none"

            smallPart.style.borderTop = "none"
            smallPart.style.borderBottom = "none"
            break;
    }
}
setBoard()

let totalLevelDisplay = 1
const integralParts = document.querySelectorAll(".integralPart")
const smallParts = document.querySelectorAll(".smallPart")
const body = document.querySelector("main")
const header = document.querySelector("header")
const footer = document.querySelector("footer")
function checkBoard(){
    const integralParts = document.querySelectorAll(".integralPart")
    const smallParts = document.querySelectorAll(".smallPart")
    smallParts.forEach((smallPart) => {
        smallPart.addEventListener("click",() => {
            clickedBoard()
            if(!smallPart.classList.contains("fixed")){
                smallPart.classList.add("clicked")
                numbers.forEach((number)=>{
                    if(number.classList.contains("clickedButton")){
                        if(number.textContent == "DEL"){
                            smallPart.textContent = ""
                            smallPart.classList.remove("wrong")
                        }
                        else{
                            smallPart.textContent = number.textContent
                            let nameOfBox = parseInt(smallPart.getAttribute("name"))
                            let smallBox = nameOfBox % 9
                            let hugeBox = (nameOfBox - smallBox) / 9
                            if(number.textContent == levels[level]["boardCorrect"][hugeBox][smallBox]){
                                smallPart.classList.add("correct")
                                correct++
                                smallPart.classList.remove("wrong")
                                smallPart.classList.add("fixed")
                                if(correct == levels[level]["correctAnswerNumber"]){
                                        level++
                                        totalLevelDisplay++
                                        nextLevel.style.display = "block"
                                        nextLevel.addEventListener("click",()=>{
                                        levelDisplay.textContent = totalLevelDisplay
                                        if(totalLevelDisplay == 4){
                                            body.style.display = "none"
                                            tutorial.style.display = "none"
                                            header.style.display = "none"
                                            footer.style.display = "flex"
                                            
                                        }
                                        createNextLevel(smallParts)
                                    })
                                }
                            }
                            else{
                                smallPart.classList.add("wrong")
                            }
                        }
                    }
                })
            }
        })
    })
    numbers.forEach((number) => {
        number.addEventListener("click",()=>{
            clickNum()
            if(!number.classList.contains("clickedButton")){
                number.classList.add("clickedButton")
            }
        })
    })
}
function clickNum(){
    numbers.forEach((number)=>{
        if(number.classList.contains("clickedButton")){
            number.classList.remove("clickedButton")
        }
    })
}
checkBoard()
function clickedBoard(){
    smallParts.forEach((smallPart)=>{
        if(smallPart.classList.contains("clicked")){
            smallPart.classList.remove("clicked")
        }
    })
}
function createNextLevel(smallParts){
    correct = 0
    const levelComplated = document.querySelectorAll(".level")
    levelComplated.forEach((finished)=>{
        finished.classList.add("invisible")
    })
    nextLevel.style.display = "none"
    smallParts.forEach((smallPart) =>{
    smallPart.classList.remove("fixed")
    smallPart.classList.remove("wrong")
    smallPart.classList.remove("correct")
    smallPart.classList.remove("clicked")
    })
    setBoard()
    checkBoard()
    clickedBoard()
}
