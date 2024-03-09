
loadtemplate = function() {

    $('#navbar').load('./templates/nav.html');

    $('#notification-cards').load('./templates/notificationcards/notificationcard.html');
    $('#footer').load('./templates/footer.html');




}


document.readyState(loadtemplate())