# Animetrailers

## TODO

- [x] Carousel img slide animation
- [x] Cache to sessionStorage -> useSessionStorage hook
- [x] Pagination for AnimeList -> Infinite scroll
- [x] Home button
- [x] Search Anime by name
- [x] Pagination for searches -> Infinite scroll
- [x] Watch trailer from promos
- [x] Design phase
  - [x] Layout -> Header / Main / Footer
  - [x] Screens -> Home / Anime Detail / Anime Search
- [x] SEO, preview link information specially on anime details
- [x] Add favorites feature

## Features

- Use JikanAPI as data provider
- Custom `useFetch` hook with:
  - Session storage as cache to reduce calls to JikanAPI
  - Custom fetch delay for searches
  - Lazy fetch
- Infinite scroll
