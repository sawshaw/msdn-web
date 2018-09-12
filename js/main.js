$(document).ready(function () {
    $("h1").css("color","red");
    $(".test").click(function () { 
        $(this).css("background-color","red"); 
    });
    $("#now").text()
});
function getyear() { 
    var date=new Date;
    var year=date.getFullYear(); 
    return year;
 }