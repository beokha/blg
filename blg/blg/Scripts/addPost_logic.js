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
        $("<button id='closeArticlePopup' class='btnCommonStyle'>Close</button>").appendTo("#createArticlePopup") // Create button for close popup
            .on('click', function () {                                         // Close on click
                $("#createArticlePopup").fadeOut("fast");
            });

        // Create form
        $("<form id='formArticlePopup' onsubmit='return popupNewArticleSubmitFormBtn()'></form>").appendTo("#createArticlePopup");
        // Form elements
        $("<div><span>Theme:</span><select name='theme_id'><option value='1' selected disabled>unselected</option></select></div>").appendTo("#formArticlePopup");
        $("<div><span>Title:</span><input type='text' name='title' required /></div>").appendTo("#formArticlePopup");

        $("<div><h3>Description:</h3></div>").appendTo("#formArticlePopup");
        $("<div><span>Short:</span><textarea name='short_description' required></textarea></div>").appendTo("#formArticlePopup");
        $("<div><span>Full:</span><textarea name='full_description' required></textarea></div>").appendTo("#formArticlePopup");
        // As anonymous ?
        $("<div><span>Anonymous?</span><input type='checkbox' name='anonymous' value='null' /></div>").appendTo("#formArticlePopup");
        // Submit and Reset
        $("<input type='reset' class='btnCommonStyle' value='reset' />").appendTo("#formArticlePopup");
        $("<input type='submit' class='btnCommonStyle' value='sent' />").appendTo("#formArticlePopup");
    }

    // define globaly function, that will execute when user click on sumbit btn
    window.popupNewArticleSubmitFormBtn = function () {

        // define variable
        var themeId = $("select[name='theme_id'] option:selected").val(),
            title = $("input[name='title']").val(),
            shortDesc = $("textarea[name='short_description'").val(),
            fullDesc = $("textarea[name='full_description'").val(),
            anonymous = $("input[name='anonymous']").prop("checked"),
            user_id = 1; // future: get user_id if customers is authorization


        if ((anonymous) || (user_id == undefined))
            user_id = null;

        // create obj
        //var newArticle = {
        //    "userId": user_id,
        //    "themeId": themeId,
        //    "title": title,
        //    "shortDesc": shortDesc,
        //    "fullDesc": fullDesc
        //};

        // create instance of obj
        // var article = new Article(newArticle);

        try {
            $.post("/Home/createNewArticle/", { "userId": user_id, "themeId": themeId, "title": title, "shortDesc": shortDesc, "fullDesc": fullDesc }, "json");
        } catch (e) {

            alert("There is some exeption, please try later.")
        } finally {

            return true;
        }
    }
});