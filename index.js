$(document).ready(function() {
    $("#btn").click(function(){
        let info = $("#input").val();
        $("#show-list").append("<li> </li>").append(info);
    });

    // $("#clear").click(function() {

    // });

});