"use strict";

$(function () {

    $("figure").hover(function () {
        var elem = this;
        $(this).find(".title").fadeOut("fast", function () {
            $(elem).find(".about").fadeIn("slow");
        });
        
    }, function () {
        var elem = this;
        $(this).find(".about").fadeOut("fast", function () {
            $(elem).find(".title").fadeIn("slow");
        });
    });
});