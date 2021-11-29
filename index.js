$(document).ready(function() {
    $("#btn").click(function(){
        let info = $("#input").val();
        $("#input").val("");
        let display = $("#show-list").append("<li> </li>").append(info);

        $("#clear").click(function() {
        display.remove();
        });
    });


});