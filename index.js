$(document).ready(function() {
    $("#btn").click(function(){
        let info = $("#input").val();
        $("#input").val("");
        let btn = `<button class = "deleteBtn">Delete</button>`;
        $("#show-list").append("<div><li>" + info + " " + btn + "</li></div>");
    });

    $("#clear").click(function() {
        $("#show-list").children().remove();
    });


     $("#show-list").on("click", ".deleteBtn", function(){
            $(this).parent().remove();
     });

});