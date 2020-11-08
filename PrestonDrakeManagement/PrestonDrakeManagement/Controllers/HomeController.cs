using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PrestonDrakeManagement.DAL;

namespace PrestonDrakeManagement.Controllers
{
    public class HomeController : Controller
    {
        private BlogContext db = new BlogContext();

        public ActionResult Index()
        {
            ViewBag.Logos = Directory.EnumerateFiles(Server.MapPath("~/Images/Logos"))
                .Select(s => "../Images/Logos/" + Path.GetFileName(s));

            ViewBag.SlideShow = Directory.EnumerateFiles(Server.MapPath("~/Images/SlideShow"))
                .Select(s => "../Images/SlideShow/" + Path.GetFileName(s));

            return View();
        }

        public ActionResult BlogPosts(int count = 0)
        {
            count += 3;

            var max = db.Blogs.Count();
            var model = db.Blogs.Take(count).ToList();
            ViewBag.Max = true;

            if (model.Count == max)
            {
                ViewBag.Max = false;
            }

            return PartialView("_BlogPosts", model);
        }
    }
}