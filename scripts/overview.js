
loadtemplate = function() {

    $('#navbar').load('./templates/nav.html');
    $('#watercard').load('./templates/watercard.html');
    $('#foodcard').load('./templates/foodcard.html');
    $('#workoutcard').load('./templates/workoutcard.html');
    $('#sleepcard').load('./templates/sleepcard.html');

    $('#assignmentcard').load('./templates/assignmentcard.html');
    $('#footer').load('./templates/footer.html');




}


document.readyState(loadtemplate())