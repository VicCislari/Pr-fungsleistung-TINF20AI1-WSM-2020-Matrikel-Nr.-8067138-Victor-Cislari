/*Victor Cislari (DHBW-Mannheim, Matrikel-Nr.: 8067138)*/

function changeState(question) {
    var answers_box_class = question.querySelector("#answers_box").attributes.class.value;
    if (answers_box_class == "close") answers_box_class = "open";
    else answers_box_class = "close";
    question.querySelector("#answers_box").setAttribute("class", answers_box_class);
}

function composeAnswer(answer_box) {
    answer_box.setAttribute("class", "write_answer");
}

function loadAnswerAmount() //this loads the answers for span id="answers_amount"
{
    var answerCounters = document.getElementsByClassName("answersCounter");
    for (var i = 0; i < answerCounters.length; i++) {
        var amount = answerCounters[i].parentElement.querySelector("#answers_box").children.length;
        answerCounters[i].querySelector("#answers_amount").innerText = amount;
    }
}

function oppinion(button) {
    //commands for the clickt button. The argument button in the function references to that.
    var used = button.querySelector("#used").value;
    var amount = parseInt(button.querySelector("#amount").innerText);
    if (used == "false") {
        button.querySelector("#amount").innerText = (amount + 1); //raise the amount
        button.querySelector("#used").value = "true"; //change the global tracking variable
        button.setAttribute("class", "active");
    } else { //if already liked,then subtract one from amount
        button.querySelector("#amount").innerText = (amount - 1); //lower the amount
        button.querySelector("#used").value = "false"; //change the global tracking variable
        button.removeAttribute("class");
    }

    //commands for the opposite clickt button. The argument button in the function references to that.
    //if a dislike is set, than subtract from that amount and remove active. Meaning that the user changed his mind
    //this is what makes the difference between dislikes and likes. Look into the big comment below
    var button_dislikes;
    //gets the opposite button
    if (button.id == "likes") button_dislikes = button.parentElement.querySelector("#dislikes");
    else button_dislikes = button.parentElement.querySelector("#likes");

    var used_dislikes = button_dislikes.querySelector("#used").value;
    var amount_dislikes = parseInt(button_dislikes.querySelector("#amount").innerText);
    if (used_dislikes == "true") {
        button_dislikes.querySelector("#amount").innerText = (amount_dislikes - 1); //raise the amount
        button_dislikes.querySelector("#used").value = "false"; //change the global tracking variable
        button_dislikes.removeAttribute("class");
    }
}

function discardAnswer(answer_box) {
    answer_box.setAttribute("class", "give_answer");
    answer_box.querySelector("#answer").value = "";
}

function getNextAnswerIndex(answer_box) //helper function
{
    return answer_box.parentElement.parentElement.querySelector("#answers_box").children.length + 1;
}

function getUsername(answer_box) //helper function
{ //returns "anonymous" if pressed anonymous, returns username if the user has a username, returns email if the user has no username and did not check for anonymous
    if (answer_box.querySelector("#answerComposition").querySelector("#anonymous").checked) return "Anonymous";
    if (user.username != "-") return user.username;
    return user.eMailAddr;
}
