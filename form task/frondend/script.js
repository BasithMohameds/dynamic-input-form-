$(document).ready(function () {
    var text = `<label contenteditable="true" class="textlabel">Text </label><input type="text" class="textget" />`
    var container = $(".container");
    var addButton = $(".newField4");
    $(addButton).click(function () {
        $(container).append(`<div>${text}<button class="delete">Delete</button></div>`)
    })
    $(container).on("click", ".delete", function () {
        $(this).parent('div').remove()
    })
})

function test() {
    $(".textlabel").each(function (index, element) {
        alert($(element).text())
    })
    $(".textget").each(function (index, txt) {
        alert($(txt).val())
    })
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}