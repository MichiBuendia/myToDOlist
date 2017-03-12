$(function() {
    $("#add").on("click", function() {
        var val = $("input").val();
        if(val !== '') {
            var elem = $("<li></li>").text(val);


            $(elem).append("<br /><a href='#' id='rem' class='btn btn-primary'>Cancella</a>",
            "<a href='#' id='ev' class='btn btn-primary'>Alta Priorità!</a>",
            "<a href='#' id='lt' class='btn btn-primary'>Fatto!!</a>",
            "<a href='#' id='down' class='btn btn-primary'>Sposta Giù!</a>",
            "<a href='#' id='up' class='btn btn-primary'>Sposta Su!</a>");

            $("#mylist").append(elem);
            $("input").val("");
            //pulsante cancella
            $("#rem").on("click", function() {
            $(this).parent().remove();
            });
            //pulsante evidenzia
            $("#ev").on("click", function() {
              $(elem).css("background-color", "yellow");
            });
            //pulsante sottolinea
            $("#lt").on("click", function() {
              $(elem).css("text-decoration", "line-through");
            });
            //pulsante sposta su DA IMPLEMENTARE!!!!
            $(".lt").on("click", function() {
              $(elem).css("text-decoration", "underline");
            });
            //pulsante sposta giù DA IMPLEMENTARE!!!
            $(".lt").on("click", function() {
              $(elem).css("text-decoration", "underline");
            });

        }
    });
});
