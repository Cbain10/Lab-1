var isAnswerDisplayed = false;

function clickedButton() {
    if (!isAnswerDisplayed) {
        document.getElementById('answer').style.display = 'block';
        document.getElementById('joke').innerHTML = 'Hide Answer';
        isAnswerDisplayed = true;
    } else{
        document.getElementById('answer').style.display = 'none';
        document.getElementById('joke').innerHTML = 'Reveal Answer';
        isAnswerDisplayed = false;
    }
}