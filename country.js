
const answerCountries = uniqueValues(randomPersonData.map(person => person.region).sort());

document.querySelector('input[value="country names"]').addEventListener("click", () => createAnswerList(answerCountries))




