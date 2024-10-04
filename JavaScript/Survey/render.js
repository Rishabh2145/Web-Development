const credMail = document.getElementById("mail");
const credPass = document.getElementById("Password");
const renderButton = document.getElementById("renderButton");
const result = document.getElementById("result");
const credPage = document.getElementById("cred")

const renderUser = document.getElementById('user');
const renderEmail = document.getElementById('contact');
const renderRating = document.getElementById('rateSubmit');
const renderSuggest = document.getElementById('Suggestions');

renderButton.onclick = function () {
    if (credMail.value == "uidevelopment@crashcourse.com" && credPass.value == "WebMaster@123") {
        credPage.style.display = 'none';
        result.style.display = 'flex';
        surveyResult.forEach(element => {
            const userVal = document.createElement('div');
            userVal.innerText = element.Educatee;
            renderUser.appendChild(userVal);
            const userMail = document.createElement('div');
            userMail.innerText = element.Email;
            renderEmail.appendChild(userMail);
            const userRating = document.createElement('div');
            userRating.innerText = element.Rating;
            renderRating.appendChild(userRating);
            const userComment = document.createElement('div');
            if (element.Suggestion == '') {
                userComment.innerText = "-";
                renderSuggest.appendChild(userComment);
            }
            else{
                userComment.innerText = element.Suggestion;
                renderSuggest.appendChild(userComment);
            }
        });
    }
}
console.log(surveyResult);


// localStorage.clear();