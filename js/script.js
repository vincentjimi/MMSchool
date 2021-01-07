$(document).ready(function () {


    let cookie = Cookies.get('Examencookie');
    if (cookie === undefined) {

        $('#cookie_btn').click(function () {
                
                $('#cookie_message').fadeOut();
                Cookies.set('Examencookie', 'valeur du cookie', { expires: 365 });
                
        })//click
        
    } else {
        $('#cookie_message').remove();
    }

  
    $(window).scroll(function() {
      if ($(document).scrollTop() > 700 && $("#myModal").attr("displayed") === "false") {
        $('#myModal').modal('show');
        $("#myModal").attr("displayed", "true");
        }
        validate();
    });
    
  
  //FORMULAIRE AJAX
  
    $( "#submit" ).click(function(e) {
      e.preventDefault();
      
      var nom = $("#nom").val();
      var prenom = $("#prenom").val();
      var email = $("#email").val();
      var email2 = $("#email2").val();
        
        if (!(/\S+@\S+\.\S+/.test(email))) {
            document.getElementById('email').classList.add("shake-input");
            setTimeout(function(){ document.getElementById('email').classList.remove("shake-input");}, 500);
        }
        if (!(/\S+@\S+\.\S+/.test(email2))) {
            document.getElementById('email2').classList.add("shake-input");
            setTimeout(function(){ document.getElementById('email2').classList.remove("shake-input");}, 500);
        }
        if (email2 != email) {
            document.getElementById('email2').classList.add("shake-input");
            setTimeout(function(){ document.getElementById('email2').classList.remove("shake-input");}, 500);
        }
        if (nom.length <= 2) {
            document.getElementById('nom').classList.add("shake-input");
            setTimeout(function(){ document.getElementById('nom').classList.remove("shake-input");}, 500);
        }
        if (prenom.length <= 2) {
            document.getElementById('prenom').classList.add("shake-input");
            setTimeout(function(){ document.getElementById('prenom').classList.remove("shake-input");}, 500);
        }
  
    //  $('#contenu').load("mail.php")
  
  $.ajax({
  
    url: 'mail.php',
  
    type: 'POST',
  
    data: {
      nom: nom, 
      prenom: prenom, 
      email: email,
      email2: email2
    },
  
    dataType: 'html',
  
    success : function(data){
  
  $('form').html(data);
  
    } //success
  
  
  }); //$.ajax
  
  
    }); //click
  
  
  

}); // End of document ready

function validate() {

    let lastName = document.getElementById('nom');
    let firstName = document.getElementById('prenom');
    let mail1 = document.getElementById('email');
    let mail2 = document.getElementById('email2');
///////////////////////nom/////////////////////////////////////////////////

    lastName.addEventListener('input', function () {
        lastName = this.value;    
        if (lastName.length > 2) {
            document.getElementById('lNom').innerHTML = 'Nom <i class="fas fa-check-circle"></i>';
            if (mail1.value != 0 && mail2.value != 0 && firstName.value != 0) {
                document.getElementById('submit').classList.remove("disabled");
            }

        } else if(lastName.length <= 2 && lastName.length !== 0) {
            document.getElementById('lNom').innerHTML = 'Nom <i class="fas fa-times-circle"></i>';
            document.getElementById('submit').classList.add("disabled");

        } else {
            document.getElementById('lNom').innerHTML = 'Nom';
            document.getElementById('submit').classList.add("disabled");
        }
    });
///////////////////////prenom/////////////////////////////////////////////////

    firstName.addEventListener('input', function () {
        firstName = this.value;    
        if (firstName.length > 2) {
            document.getElementById('lPrenom').innerHTML = 'Prénom <i class="fas fa-check-circle"></i>';
            if (mail1.value != 0 && mail2.value != 0 && lastName.value != 0) {
                document.getElementById('submit').classList.remove("disabled");
            }
        } else if(firstName.length <= 2 && firstName.length !== 0) {
            document.getElementById('lPrenom').innerHTML = 'Prénom <i class="fas fa-times-circle"></i>';
            document.getElementById('submit').classList.add("disabled");
        } else {
            document.getElementById('lPrenom').innerHTML = 'Prénom';
            document.getElementById('submit').classList.add("disabled");
        }
        
       
    });
  //////////////////////////////////email////////////////////////////////////  
    


    mail1.addEventListener('input', function () {
        mail1 = this.value;
        if (/\S+@\S+\.\S+/.test(mail1)) {
            document.getElementById('lEmail').innerHTML = 'Email <i class="fas fa-check-circle"></i>';
            if (mail2) {
                compare(mail1, mail2);
            }
        } else if (mail1 == 0) {
            document.getElementById('lEmail').innerHTML = 'Email';
            document.getElementById('submit').classList.add("disabled");
        } else {
            document.getElementById('lEmail').innerHTML = 'Email <i class="fas fa-times-circle"></i>';
            document.getElementById('submit').classList.add("disabled");
        };

    });

    mail2.addEventListener('input', function () {
        let mail1 = document.getElementById('email').value;
        mail2 = this.value;
        if (/\S+@\S+\.\S+/.test(mail2)) {
            document.getElementById('lEmail2').innerHTML = 'Confirmation email <i class="fas fa-check-circle"></i>';
            compare(mail1, mail2);
        } else if (mail2 == 0) {
            document.getElementById('lEmail2').innerHTML = 'Confirmation email';
            document.getElementById('submit').classList.add("disabled");
        } else {
            document.getElementById('lEmail2').innerHTML = 'Confirmation email <i class="fas fa-times-circle"></i>';
            document.getElementById('submit').classList.add("disabled");
        };
        
    });

}



function compare(mail1, mail2) {
    let lastName = document.getElementById('nom').value;
    let firstName = document.getElementById('prenom').value;

    if (mail2 == mail1) {
        if (lastName.length > 2 && firstName.length > 2) {
            document.getElementById('submit').classList.remove("disabled");
        } else {
            document.getElementById('submit').classList.add("disabled");
        }
    } else {
        document.getElementById('submit').classList.add("disabled");
        
    }
}

