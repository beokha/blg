using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace blg.Models
{
    public class Article
    {
        public Guid GUID;
        public int? user_id;
        public int theme_id;
        public DateTime time_of_creation;
        public string title;
        public string short_description;
        public string full_description;
        public int rating;
        public bool state;

        public Article(Guid GUID, int? user_id, int theme_id, DateTime time_of_creation, string title, string short_description, string full_description, int rating, bool state)
        {
            this.GUID = GUID;
            this.user_id = user_id;
            this.theme_id = theme_id;
            this.time_of_creation = time_of_creation;
            this.title = title;
            this.short_description = short_description;
            this.full_description = full_description;
            this.rating = rating;
            this.state = state;
        }
    }
}