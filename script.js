
const buttonList = document.querySelector(".list-buttons");
const answerList = document.querySelector(".list-answer");

//button maken
const createButton = (buttonName) => {
    let button = document.createElement("input");
    button.classList.add("question");
    button.type = "button";
    button.value = buttonName;
    buttonList.appendChild(button);
}

// html opzetten
createButton("remove all by hand");
createButton("country names");
createButton("apricorn women");
createButton("nog maken");

// lijst wissen
const removeAllAnswers = () => {
    while (answerList.firstChild) {
        answerList.removeChild(answerList.lastChild);
    }
}

// li lijst maken van string array
const createAnswerList = (itemList) => {
    removeAllAnswers();
    itemList.forEach(item => {
        let answer = document.createElement("li");
        answer.classList.add("item");
        answer.innerHTML = item;
        answerList.appendChild(answer);
    });
}

// li lijst maken van foto met voor / achternaam 
const createAnswerImageBlock = (itemList) => {
    removeAllAnswers();

    itemList.forEach(item => {
        const answer = document.createElement("li");
        const addImg = document.createElement("img");
        answer.classList.add("person-img");
        answer.innerHTML = item.name + " " + item.surname;

        //img tags
        addImg.classList.add("person-image");
        addImg.src = item.photo;
        addImg.alt = "person-picture";

        answer.appendChild(addImg);
        answerList.appendChild(answer);
    });
}
// unique lijst maken
let uniqueValues = (input) => [...new Set(input)];
document.querySelector('[value = "remove all by hand"]').addEventListener("click", () => removeAllAnswers());
