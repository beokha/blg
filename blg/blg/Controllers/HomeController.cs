using blg.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blg.Controllers
{
    public class HomeController : Controller
    {
        // Main Page
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

        public ActionResult TermOfUse()
        {
            return View();
        }

        public ActionResult Article()
        {
            return View();
        }

        [HttpPost]
        // Write data to file 
        public void createNewArticle(int? userId, int themeId, string title, string shortDesc, string fullDesc)
        {
            string full_file;
            using (StreamReader reader = new StreamReader(Server.MapPath("/Models/article.json"), true))
            {
                full_file = reader.ReadToEnd();
            }
            string writeAfterThis = "\"article\": [";
            int index = full_file.IndexOf(writeAfterThis) + "\"article\": [".Length + 1;

            string user_id; // Need to get null!
            if (userId == null) {
                user_id = "null";
            } else
            {
                user_id = userId.ToString();
            };
            
            full_file = full_file.Insert(index, "\n{\"GUID\": \"" + Guid.NewGuid()
                     + "\",\"user_id\": " + user_id
                     + ",\"theme_id\": " + themeId
                     + ",\"time_of_creation\": \"" + DateTime.Now
                     + "\",\"title\": \"" + title
                     + "\",\"short_description\": \"" + shortDesc
                     + "\",\"full_description\": \"" + fullDesc
                     + "\",\"rating\": 0,\"state\": true},");

            FileInfo fi = new FileInfo(Server.MapPath("/Models/article.json"));
            using (TextWriter dataWriter = new StreamWriter(fi.Open(FileMode.Truncate)))
            {
                dataWriter.Write(full_file);
            }
        }
    }
}