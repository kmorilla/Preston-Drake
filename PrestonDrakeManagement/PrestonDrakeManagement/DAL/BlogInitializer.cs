using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using PrestonDrakeManagement.Models;

namespace PrestonDrakeManagement.DAL
{
    public class BlogInitializer : DropCreateDatabaseIfModelChanges<BlogContext>
    {
        protected override void Seed(BlogContext context)
        {
            var blogs = new List<Blog>
            {
                new Blog{ID = 1, Description = "First Blog", Title = "First", Url = "#"},
                new Blog{ID = 2, Description = "Second Blog", Title = "Second", Url = "#"},
                new Blog{ID = 3, Description = "Third Blog", Title = "Third", Url = "#"}
            };

            blogs.ForEach(b => context.Blogs.Add(b));
            context.SaveChanges();
        }
    }
}