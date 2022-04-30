using FluentMigrator;
using System;

namespace SerenityProject.Migrations.DefaultDB
{
    [Migration(20220430_140500)]
    public class DefaultDB_20220430_140500_MovieKind : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Movie").InSchema("mov")
                .AddColumn("Kind").AsInt32().NotNullable()
                    .WithDefaultValue(1);
        }
    }
}