
let apricornWomen = uniqueValues(randomPersonData.filter(person => person.gender === "female").filter(person => person.age > 30).filter(person => {
    let day = parseInt(person.birthday.dmy)
    let month = parseInt(person.birthday.mdy);
    if (month === 1 || month === 12 && day > 21 || day < 20) {
        return person;
    }
}).sort(function (a, b) {
    var nameA = a.name
    var nameB = b.name;
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}))

document.querySelector('input[value="apricorn women"]').addEventListener("click", () => createAnswerImageBlock(apricornWomen));

