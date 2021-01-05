$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 700 && $("#myModal").attr("displayed") === "false") {
          $('#myModal').modal('show');
          $("#myModal").attr("displayed", "true");
        }
    });
});

