using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotNetCoreApi.Domain;
using DotNetCoreApi.EF;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingListController : ControllerBase
    {
        readonly DataContext dataContext;

        public ShoppingListController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public List<ShoppingListItem> Get()
        {
            return dataContext.ShoppingListItems.ToList();
        }

        [HttpPost]
        public void Post([FromBody] ShoppingListItem newItem)
        {
            dataContext.ShoppingListItems.Add(newItem);
            dataContext.SaveChanges();
        }
    }
}
