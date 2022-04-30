﻿namespace SerenityMovieTutorial.Default {
    export interface MovieRow {
        MovieId?: number;
        Title?: string;
        Description?: string;
        Storyline?: string;
        Year?: number;
        ReleaseDate?: string;
        Runtime?: number;
        Kind?: number;
        GenreId?: number;
        GenreName?: string;
    }

    export namespace MovieRow {
        export const idProperty = 'MovieId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Default.Movie';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            MovieId = "MovieId",
            Title = "Title",
            Description = "Description",
            Storyline = "Storyline",
            Year = "Year",
            ReleaseDate = "ReleaseDate",
            Runtime = "Runtime",
            Kind = "Kind",
            GenreId = "GenreId",
            GenreName = "GenreName"
        }
    }
}

