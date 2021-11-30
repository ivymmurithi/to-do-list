$(document).ready(function() {
    $("#btn").click(function(){
        let info = $("#input").val();
        $("#input").val("");
        let display = $("#show-list").append("<li>" + info + "</li>");

        $("#clear").click(function() {
        display.remove();
        });

        $("<button class = 'deleteBtn'>Delete</button>").appendTo(display);

        $(".deleteBtn").on("click", function(){
            $(".deleteBtn").parent().children().remove("li, .deleteBtn");
        });


    });

});