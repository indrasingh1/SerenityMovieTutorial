﻿namespace SerenityMovieTutorial.Default {
    export interface GenreRow {
        GenreId?: number;
        Name?: string;
    }

    export namespace GenreRow {
        export const idProperty = 'GenreId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Genre';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            GenreId = "GenreId",
            Name = "Name"
        }
    }
}

