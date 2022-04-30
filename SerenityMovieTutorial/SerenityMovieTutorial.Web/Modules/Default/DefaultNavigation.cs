using Serenity.Navigation;
using MyPages = SerenityMovieTutorial.Default.Pages;

[assembly: NavigationMenu(10000, "Movie Database", icon: "fa-bullhorn")]
[assembly: NavigationLink(10001, "Movie Database/Movie", typeof(MyPages.MovieController), icon: "fa-video-camera")]
[assembly: NavigationLink(int.MaxValue, "Default/Genre", typeof(MyPages.GenreController), icon: null)]