let surveyResult = JSON.parse(localStorage.getItem("surveyResult")) || [];
const submitButton = document.getElementById("submitButton");
const username = document.getElementById("floatingTextarea");
const email = document.getElementById("exampleFormControlInput1");
const comment = document.getElementById("exampleFormControlTextarea1");
const rating = document.getElementById("rate");



submitButton.onclick = function () {
    if (username.value != '' && email.value != '' && rating.value != '') {
        let surveyValue = {
        Educatee: username.value,
        Email: email.value,
        Rating: rating.value,
        Suggestion: comment.value
    }
    surveyResult.unshift(surveyValue);
    localStorage.setItem("surveyResult", JSON.stringify(surveyResult));
    console.log("Survey saved:", surveyResult);
    }
}
const render = document.getElementById("render");
render.onclick = function () {
    window.location.href = "render.html"
}


