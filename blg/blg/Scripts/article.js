"use strict";

$(function () {

      function Article() {

        //if (!arguments.length) // No args? It's getter
          //   return console.log(this);//return null;
        var _article = arguments[0]; // get article obj

        this.GUID = generateGUID();
        this.user_id = _article["userId"];
        this.theme_id = _article["theme_id"];
        this.time_of_creation = new Date();
        this.title = _article["title"];
        this.short_description = _article["short_description"][0];
        this.full_description = _article["full_description"][0];
        this.rating = 0;
        this.state = true;
    }

      function generateGUID() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
          });
      }

    // get data from url
    function parseURLParams(url) {
        var queryStart = url.indexOf("?") + 1,
            queryEnd = url.indexOf("#") + 1 || url.length + 1,
            query = url.slice(queryStart, queryEnd - 1),
            pairs = query.replace(/\+/g, " ").split("&"),
            parms = {}, i, n, v, nv;

        if (query === url || query === "") return;

        for (i = 0; i < pairs.length; i++) {
            nv = pairs[i].split("=", 2);
            n = decodeURIComponent(nv[0]);
            v = decodeURIComponent(nv[1]);

            if (!parms.hasOwnProperty(n)) parms[n] = [];
            parms[n].push(nv.length === 2 ? v : null);
        }
        return parms;
    }


    var urlParams = parseURLParams(document.URL); // get url par
    var article = new Article(urlParams); // create instance of obj

    // Insert on web page
    $("#articleTitle").text(article.title[0]);
    $("#shortDescription").text(article.short_description);
    $("#fullDescription").text(article.full_description);

    var author = (article.user_id == ((null) || (undefined))) ? "anonymous" : article.user_id;
    $("#author").text(author);
    $("#rating").text(article.rating);
    $("#dateOfCreation").text(article.time_of_creation);
});

