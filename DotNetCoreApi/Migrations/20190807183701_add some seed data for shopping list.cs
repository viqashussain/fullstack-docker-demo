using Microsoft.EntityFrameworkCore.Migrations;

namespace DotNetCoreApi.Migrations
{
    public partial class addsomeseeddataforshoppinglist : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                "INSERT INTO ShoppingListItems VALUES ('Bread', 1.99)\r\nINSERT INTO ShoppingListItems VALUES ('Cheese', 1.49)\r\nINSERT INTO ShoppingListItems VALUES ('Milk', 1.29)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
