using Serenity.Navigation;
using MyPages = SerenityMovieTutorial.Default.Pages;

[assembly: NavigationMenu(10000, "Movie Database", icon: "fa-bullhorn")]
[assembly: NavigationLink(10001, "Movie Database/Movie", typeof(MyPages.MovieController), icon: "fa-video-camera")]
[assembly: NavigationLink(10002, "Movie Database/Genre", typeof(MyPages.GenreController), icon: "fa-thumb-tack")]