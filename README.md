# Animetrailers

## TODO

- [x] Carousel img slide animation
- [x] Cache to sessionStorage -> useSessionStorage hook
- [x] Pagination for AnimeList -> Infinite scroll
- [x] Home button
- [x] Search Anime by name
- [x] Pagination for searches -> Infinite scroll
- [x] Watch trailer from promos
- [] Design phase
  - [] Layout -> Header / Main / Footer
  - [] Screens -> Home / Anime Detail / Anime Search
- [] Add favorites feature

## Features

- Use JikanAPI as data provider
- Custom `useFetch` hook with:
  - Session storage as cache to reduce calls to JikanAPI
  - Custom fetch delay for searches
  - Lazy fetch
- Infinite scroll
