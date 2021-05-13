var buscador = $("#table").DataTable();

$("#input-search").keyup(function() {

    buscador.search($(this).val()).draw();

    if ($("#input-search").val() == "") {
        $(".content-search").fadeOut(300);
    } else {
        $(".content-search").fadeIn(400);
    }
})


$("#input-search").focusout(function() {
    setTimeout(myFunction, 3000)



})

function myFunction() {
    document.getElementById("buscador").style.display = "none"
}