let visibilityNone = document.getElementById('cookie_message');

if (visibilityNone) {
    setTimeout(function(){ visibilityNone.classList.remove('d-none'); }, 9000);
}

let cookie = Cookies.get('Examencookie');
if (cookie === undefined) {

    $('#cookie_btn').click(function () {
            
            $('#cookie_message').fadeOut();
            Cookies.set('Examencookie', 'valeur du cookie', { expires: 365 });
            
    })//click
    
} else {
    $('#cookie_message').remove();
}