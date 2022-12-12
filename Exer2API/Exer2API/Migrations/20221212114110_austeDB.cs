using Microsoft.EntityFrameworkCore.Migrations;

namespace Exer2API.Migrations
{
    public partial class austeDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contato_Pessoa_PessoaId",
                table: "Contato");

            migrationBuilder.AlterColumn<int>(
                name: "PessoaId",
                table: "Contato",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Contato_Pessoa_PessoaId",
                table: "Contato",
                column: "PessoaId",
                principalTable: "Pessoa",
                principalColumn: "PessoaId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contato_Pessoa_PessoaId",
                table: "Contato");

            migrationBuilder.AlterColumn<int>(
                name: "PessoaId",
                table: "Contato",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Contato_Pessoa_PessoaId",
                table: "Contato",
                column: "PessoaId",
                principalTable: "Pessoa",
                principalColumn: "PessoaId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
