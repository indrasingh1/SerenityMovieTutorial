
namespace SerenityMovieTutorial.Default {

    import fld = MovieRow.Fields;


    @Serenity.Decorators.registerClass()
    export class MovieGrid extends Serenity.EntityGrid<MovieRow, any> {
        protected getColumnsKey() { return 'Default.Movie'; }
        protected getDialogType() { return MovieDialog; }
        protected getIdProperty() { return MovieRow.idProperty; }
        protected getInsertPermission() { return MovieRow.insertPermission; }
        protected getLocalTextPrefix() { return MovieRow.localTextPrefix; }
        protected getService() { return MovieService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields(): Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: fld.Description, title: Q.text(fld.Description) },
                { name: fld.Storyline, title: Q.text(fld.Storyline) },
                { name: fld.Year, title: Q.text(fld.Title) }
            ];
        }
    }
}