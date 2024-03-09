
loadtemplate = function() {

    $('#navbar').load('./templates/nav.html');
    $('#healthcard').load('./templates/sleepcard.html');
    $('#assignmentcard').load('./templates/assignmentcard.html');
    $('#footer').load('./templates/footer.html');




}


document.readyState(loadtemplate())