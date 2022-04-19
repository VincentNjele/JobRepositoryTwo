import { type } from "@testing-library/user-event/dist/type";

export interface SingleMovieProperties {




    adult: boolean;
    backdrop_path: string;
    // string belongs_to_collection 
    spoken_languages: spoken_languages;
    budget: number;
    genres: genres;
    id: number;
    //  string imdb_id 
    original_title: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    tagline: string;
    production_companies: production_companies;
    production_countries: production_countries;
    release_date: string;
    revenue: number;
    homepage: string
    runtime: number;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

}

export interface spoken_languages {
    english_name: string,
    iso_639_1: string,
    name: string;
}

export interface production_countries {

    iso_3166_1: string,
    name: string;
}

export interface production_companies {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface genres {
    id: number;
    name: string;
}

export type GetMovieById = {

    poster_path: string;
    homepage: string;
    title: string;
    release_date: string;
    overview: string;
}

type GetMovie = Array<GetMovieById>