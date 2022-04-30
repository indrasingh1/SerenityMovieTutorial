namespace SerenityMovieTutorial.Default {
    export enum MovieKind {
        Film = 1,
        TvSeries = 2,
        MiniSeries = 3
    }
    Serenity.Decorators.registerEnumType(MovieKind, 'SerenityMovieTutorial.Default.MovieKind', 'MovieDB.MovieKind');
}

