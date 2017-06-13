"use strict";

// Construct
$(function () {
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
    var article = file("article.json"),
        articleArr = article.article.sort(function (a,b) {// Get article array and make it reverse direction
            return a.time_of_creation > b.time_of_creation ? -1 : a.time_of_creation < b.time_of_creation ? 1 : 0;
        }); 

    var loadArticle = articleArr.length; // Counter number of loaded article
    for (var i = 0; i < 10; i++) { // Load last 10 article onload page
        insertingAllArticleInSection(loadArticle--, articleArr[i]);
    }
    articleArr.splice(0, 10); // delete from array already push article

    $("#loadMore").on('click', function () {
        var countToShow = (articleArr.length <= 10) ? articleArr.length : 10;
        for (var i = 0; i < countToShow; i++) {
            insertingAllArticleInSection(loadArticle--, articleArr[i]);
            
        }
        articleArr.splice(0, countToShow); // delete from array already push article

        // hide btn if no more article 
        if (countToShow != 10) {
            $("#loadMore").fadeOut("slow");
        }
    });

    // Inserting article to article section
    function insertingAllArticleInSection(index, article) {
        var articleSection = $(".all_article"); // Get article DOM 
        articleSection.append(newArticleDOM(index, article));

        //$.each(articleArr.reverse(), function (index, value) { // Inserting articles to the document
        //    if (value.state) // Check if article don't blocked
        //        articleSection.prepend(newArticleDOM(index, value)); // value is the same to articleArr[index]
        //});

        // Function to create new DOM element for article
        function newArticleDOM(index, article) {
            //if (article == undefined) {
            //    return alert(article, )
            //}
            return $("<article class='article_section'>"
                + "<header><a href='/Home/Article?user_id="
                + article.user_id + "&theme_id=" + article.theme_id + "&time_of_creation=" + article.time_of_creation
                + "&title=" + article.title + "&short_description=" + article.short_description + "&full_description=" + article.full_description + "&rating=" + article.rating
                + "#" + article.GUID
                + "'><span>#" + index + " </span>" + article.title + "</a></header>"
                + "<p>" + article.short_description + "</p>"
                + "</article>"
            );
        }
    }
})


$(function () {
    $(".article_section").on('click', function () {
        alert(article);
    })
})