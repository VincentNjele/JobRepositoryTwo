

export interface MoviesProperties {

    adult: boolean;
    backdrop_path: string;
    genres: genres[];
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    tagline: string;
    production_companies: production_companies[];
    production_countries: production_countries[];
    release_date: string;
    homepage: string;
    title: string;
    vote_average: number;
    vote_count: number;

}

export interface genres {

    id: number;
    name: string;
}

export interface production_companies {

    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface production_countries {
    iso_3166_1: string;
    name: string;
}