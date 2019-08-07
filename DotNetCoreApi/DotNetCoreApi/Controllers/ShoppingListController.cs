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

        // GET api/values
        [HttpGet]
        public List<ShoppingListItem> Get()
        {
            return dataContext.ShoppingListItems.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
