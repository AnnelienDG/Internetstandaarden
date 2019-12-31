/** Hulp van Ramon Meijers gehad om te weten hoe javascript het meest efficient kunt opschrijven en google gebruikt voor de functies **/


$(document).ready(function () {
    $(".icon").click(function () {
        var x = $("#myTopnav");
        if (!x.hasClass("responsive")) {
            x.addClass("responsive");
        } else {
            x.removeClass("responsive");
        }
    });

});

/** dus als het responsive is, dan wordt bij het klikken de eigenschap dat het responsive is verwijderd, en als dit niet het geval is, wordt de eigenschap responsive toegevoegd **/
