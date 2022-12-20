// Объявление const задаёт константу, то есть переменную, которую нельзя менять//
//document.getElementById доступ к элементу с определеным id (индификатором) //
const game = document.getElementById("game")
const scoreDisplay = document.getElementById("score")

const owngameCategories = [
    {
        genre: "category 1",
        questions: [
            {
                questions:  "dsadsadsadsada",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "100",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "200",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "300",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "400",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "500",
            }
        ]
    },
    {
        genre: "category 2",
        questions: [
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "100",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "200",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "300",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "400",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "500",
            }
        ]
    },
    {
        genre: "category 3",
        questions: [
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "100",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "200",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "300",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "400",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "500",
            }
        ]
    },
    {
        genre: "category 4",
        questions: [
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "100",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "200",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "300",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "400",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "500",
            }
        ]
    },
    {
        genre: "category 5",
        questions: [
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "100",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "200",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "300",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "400",
            },
            {
                questions:  "8 знак задиака",
                answers: ["лев", "волк", "лиса"], 
                correct: "лев",
                level: "500",
            }
        ]
    }
] 

let score = 0



function addCategory(category) {
    const string = document.createElement("div")
    string.classList.add("genre-string")

    const genreTitle = document.createElement("div")
    genreTitle.classList.add("genre-title")
    genreTitle.innerHTML = category.genre

    string.appendChild(genreTitle)
    game.append(string)
    //работа с карточками вопросов //

    category.questions.forEach(questions => {
        const card = document.createElement("div")
        card.classList.add("card")
        string.append(card)

        if(questions.level === "100") {
            card.innerHTML = 100
        }
        if(questions.level === "200") {
            card.innerHTML = 200
        }
        if(questions.level === "300") {
            card.innerHTML = 300
        }
        if(questions.level === "400") {
            card.innerHTML = 400
        }
        if(questions.level === "500") {
            card.innerHTML = 500
        }
        //работа с вопросами //
        //данные вопроса//
        card.setAttribute("data-question", questions.questions)
        //варианты ответов//
        card.setAttribute("data-answer-1", questions.answers[0])
        card.setAttribute("data-answer-1", questions.answers[1]) 
        card.setAttribute("data-answer-1", questions.answers[2]) 
        //Правильный ответ//  
        card.setAttribute("data-corrcet",questions.correct)
        //Пцыфра на карточке// 
        card.setAttribute("data-value", card.getInnerHTML()) 
       
        //переворот карточки //
        card.addEventListener("click", flipCard)
    })
}

owngameCategories.forEach(category => addCategory(category))

//функция переворота карты //
function flipCard() {
    //опустошение карты //
    this.innerHTML = ""
    //изменяем шрифт//
    this.style.fontSize ="30px"
    this.style.lineHeigt = "30px"
     //div с текстом вопроса //
    const textDisplay = document.createElement("div")
    //отображение текста с добавлением списка класов(текст карточки)//
    textDisplay.classList.add("card-text")
    //добавления вопроса в html //
    textDisplay.innerHTML = this.getAttribute("data-question")
    //добавления к кнопкам //
    const firstButton = document.createElement("button")
    const secondButton = document.createElement("button")
    //классы кнопок //
    firstButton.classList.add("first-button")
    secondButton.classList.add("second-button")
    //Текст кнопок //
    firstButton.innerHTML = this.getAttribute("data-answers-1")
    secondButton.innerHTML = this.getAttribute("data-answers-2")
    //добавление (события) результата //
    firstButton.addEventListener("click", getResult)
    secondButton.addEventListener("click", getResult)
    //вставка кнопок //
    this.append(textDisplay, firstButton, secondButton)
     //добавления масива для удаления повторов на перевороте//
     const allCards = Array.from(document.querySelectorAll(".card"))
  //удаления для каждой карточки кликера, востановление только после ответа//
    allCards.forEach(card => card.removeEventListener("click", flipCard))
}

function getResult () {
    const allCards = Array.from(document.querySelectorAll("card"))
    allCards.forEach(card.addEventListener("click", flipCard))

    const cardOfButton = this.parentElement

    console.log("cardOfButton", cardOfButton)

    if (cardOfButton.getAttribute("data-correct") == this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute("data-value"))
        scoreDisplay.innerHTML = score 
        cardOfButton.classList.add("correct-answer")
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }cardOfButton.innerHTML = cardOfButton.getAttribute("data-value")

        }, 100)

    } else {
        cardOfButton.classList.add("wrong-answer")
        setTimeout (() =>  {
            while (cardOfButton.firstChild) {
            cardOfButton.removeChild(cardOfButton.lastChild)
        }
        cardOfButton.innerHTML = 0
        }, 100)
    } 
    cardOfButton.removeEventListener("click", flipCard)

}