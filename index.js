$(document).ready(function() {
    $("#btn").click(function(){
        let info = $("#input").val();
        $("#input").val("");
        let btn = `<button class = "deleteBtn">Delete</button>`;
        let completed =`<button class = "completedBtn">Completed</button>`
        let displayed = $("#show-list").append("<div><li>" + info + " " + btn + " " + completed + "</li></div>");
    });

    $("#clear").click(function() {
        $("#show-list").children().remove();
    });


     $("#show-list").on("click", ".deleteBtn", function(){
            $(this).parent().remove();
     });

     $("#show-list").on("click", ".completedBtn", function() {
        $(this).parent().css('text-decoration', 'line-through')
     });

});