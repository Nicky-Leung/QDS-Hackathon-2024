
loadtemplate = function() {

    $('#navbar').load('./templates/nav.html');
    $('#calender').load('./templates/calendercard.html');
    $('#tasks').load('./templates/taskcard.html');

    $('#footer').load('./templates/footer.html');




}


document.readyState(loadtemplate())