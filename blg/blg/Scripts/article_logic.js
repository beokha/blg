"use strict";

// Construct
$(function () {
    window.Article = function (article) {

        //if (!arguments.length) // No args? It's getter
         //   return console.log(this);//return null;

        //console.log(arguments);
        //this.id = null;
        //this.user = 
    }
    window.HotArticle = function () {

    }
});

// Get article, logic
$(function () {

    // Read article from article file
    var file = function readArticleFile(fileName) {
        var result;
        $.getJSON({
            dataType: "json",
            async: false,   // Make it sync, because we need to get output
            url: "/Models/" + fileName,
            success: function (json) {
                result = json;
            }
        });

        return result;
    }

    // All article
    var article = file("article.json");
    insertingAllArticleInSection(article);

    // Inserting article to article section
    function insertingAllArticleInSection(article) {
        var articleSection = $(".all_article"); // Get article DOM 
        var articleArr = article.article; // Get article array


        $.each(articleArr, function (index, value) { // Inserting articles to the document
            articleSection.prepend(newArticleDOM(value)); // value is the same to articleArr[index]
        });

        // Function to create new DOM element for article
        function newArticleDOM(article) {
            return $("<article class='article_section'>"
                + "<header><a href='#'><span>#" + article.id + " </span>" + article.title + "</a></header>"
                + "<p>" + article.short_description + "</p>"
                + "</article>"
            );
        }
    }
})

// Add article, logic
$(function () {
    // click on the 'add post'
    $(".btn_add_post, .add_post").on("click", function () {

                                                                                            // For future - create popup with author, if exist
        if (!$("div").is("#createArticlePopup")) // If no popup element - create it
            popupForNewArticle();
        else 
            $("#createArticlePopup").fadeIn("slow"); // If exist - show
    });

    function popupForNewArticle() {
        ///event.stopPropagation();
        $("<div id='createArticlePopup'></div>").appendTo(".body-content");
        $("<button id='closeArticlePopup' class='btn_add_post'>Close</button>").appendTo("#createArticlePopup") // Create button for close popup
            .on('click', function () {                                         // Close on click
                $("#createArticlePopup").fadeOut("fast");
            });

        // Create form
        $("<form id='formArticlePopup'></form>").appendTo("#createArticlePopup");
        // Form elements
        $("<div><span>Theme:</span><input type='text' name='theme_id' required /></div>").appendTo("#formArticlePopup");
        $("<div><span>Title:</span><input type='text' name='title' required /></div>").appendTo("#formArticlePopup");
        $("<div><span>Short:</span><textarea name='short_description' required></textarea></div>").appendTo("#formArticlePopup");
        $("<div><span>Full:</span><textarea name='full_description' required></textarea></div>").appendTo("#formArticlePopup");
        // As anonymous ?
        $("<input type='text' name='user_id' required />").appendTo("#formArticlePopup");
        // Submit and Reset
        $("<input type='submit' value='sent' />").appendTo("#formArticlePopup");
        $("<input type='reset' value='reset' />").appendTo("#formArticlePopup");
    }
});