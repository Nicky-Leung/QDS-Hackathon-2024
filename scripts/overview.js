
loadtemplate = function() {

    $('#navbar').load('./templates/nav.html');
    $('#watercard').load('./templates/healthcards/watercard.html');
    $('#foodcard').load('./templates/healthcards/foodcard.html');
    $('#workoutcard').load('./templates/healthcards/workoutcard.html');
    $('#sleepcard').load('./templates/healthcards/sleepcard.html');
    $('#assignmentcard').load('./templates/healthcards/assignmentcard.html');


    $('#workloadcard').load('./templates/workloadcard.html');
    $('#emotioncard').load('./templates/emotioncard.html');
    $('#footer').load('./templates/footer.html');




}


document.readyState(loadtemplate())