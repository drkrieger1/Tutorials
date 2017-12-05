using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactComments.Controllers
{
    public class HomeController : Controller 
    {
        //public string Index()
        //{
        //    return "this is the home view";
        //}

        public IActionResult Index()
        {
            return View();
        }
    }
}
