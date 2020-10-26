using System.Web;
using System.Web.Optimization;

namespace PrestonDrakeManagement
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/slick").Include(
                "~/Scripts/slick.js"));

            bundles.Add(new ScriptBundle("~/bundles/slick-index").Include(
                "~/Scripts/slick-index.js"));

            bundles.Add(new ScriptBundle("~/bundles/index").Include(
                "~/Scripts/index.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/slick.css",
                "~/Content/site.css"));
        }
    }
}
