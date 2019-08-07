using System.Collections.Generic;
using DotNetCoreApi.Domain;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreApi.EF
{
    public class DataContext: DbContext
    {
        public DbSet<ShoppingListItem> ShoppingListItems { get; set; }

        public DataContext(DbContextOptions options) : base(options)
        {
        }
    }
}
