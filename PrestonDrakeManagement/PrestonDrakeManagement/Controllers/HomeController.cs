using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PrestonDrakeManagement.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Logos = Directory.EnumerateFiles(Server.MapPath("~/Images/Logos"))
                .Select(s => "../Images/Logos/" + Path.GetFileName(s));

            ViewBag.SlideShow = Directory.EnumerateFiles(Server.MapPath("~/Images/SlideShow"))
                .Select(s => "../Images/SlideShow/" + Path.GetFileName(s));

            return View();
        }
    }
}