
loadtemplate = function() {

    $('#navbar').load('./templates/nav.html');
    $('#calender').load('./templates/calendercard.html');

    $('#footer').load('./templates/footer.html');




}


document.readyState(loadtemplate())