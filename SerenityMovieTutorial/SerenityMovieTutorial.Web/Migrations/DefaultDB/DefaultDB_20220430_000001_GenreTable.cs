using FluentMigrator;
using System;

namespace SerenityMovieTutorial.Migrations.DefaultDB
{
    [Migration(20220430000001)]
    public class DefaultDB_20220430_000001_GenreTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Genre").InSchema("mov")
                .WithColumn("GenreId").AsInt32().NotNullable()
                    .PrimaryKey().Identity()
                .WithColumn("Name").AsString(100).NotNullable();

            Alter.Table("Movie").InSchema("mov")
                .AddColumn("GenreId").AsInt32().Nullable()
                    .ForeignKey("FK_Movie_GenreId", "mov", "Genre", "GenreId");
        }
    }
}