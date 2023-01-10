export interface News{
    id: number,
    person_id: number,
    title: string,
    text: string,
    slug:string,
    description: string,
    created_at: string,
    image: string,
    geo_location: string,
    relevance_key: string,
    relevance_type: number,
    states_ids: string,
    state_regions_id: string,
    included: boolean,
}

export interface Youtube{
    videoId: string,
    videoUrl: string
}
export interface Leader2{
    id: number,
    first_name: string,
    last_name: string,
    roles_names: string,
    cached_primary_email_address: string,
    mobile: number,
    phone: number,
    work_phone_number: number,
    state_regions: string,
    email_opt_in: boolean,
    mobile_opt_in: boolean,
    timezone: string,
    twitter_url: string,
    facebook_url: string,
    linked_in_url: string,
    website: string,
    birthdate: string,
    user_id:number,
    sex: string,
    upper_hous_district_id: number,
    lower_hous_district_id: number,
    leader_positions: {
        id: number,
        requested_role_key: string,
        system_role_key: string,
    },
    roles_ids:{},
    team_ids:{},
    regions: {
        id: number,
        name: string,
        core_state_id: string,
        districts_count: number,
    },
    person_addresses: [
        {
            id: number,
            address1: string,
            address2: string,
            address3: string,
            city: string,
            state_abbreviation: string,
            zip: number,
    
        }],
    avatar_images: {
        attachment_file_name: string,
        attachment_content_type: string,
    },
    }
    

    export interface Movies{
        [x: string]: any,
        poster_path: string,
        id: number,
        title: string,
        original_name: string,
        media_type: string,
        profile_path: string
        
        results: {
            poster_path: string,
            id: number,
            title: string,
        }
    }

    export interface Trending{
        [x: string]: any,
        poster_path: string,
        id: number,
        
        results: {
            poster_path: string,
            id: number,
            title: string,
        }
    }

    export interface Tv{
        [x: string]: any,
        poster_path: string,
        id: number,
        
        results: {
            poster_path: string,
            id: number,
            title: string,
        }
    }

    export interface Movie{
        adult: boolean,
        backdrop_path: string,
        title: string,
        genres: {
            id: number,
            name: string
        }
    }

    export interface Tvs{
        adult: boolean,
        backdrop_path: string,
        title: string,
        genres: {
            id: number,
            name: string
        }
        seasons: {
            id: number,
            name: string,
            episode_count: number,
            overview: string,
            poster_path: string,
            season_number: number
        },
        episode_run_time: number,
        vote_average: number,
        first_air_date: string,
        status: string,
        number_of_episodes: number,
        number_of_seasons: number,
        languages: string
    }

    export interface Networks{
        id: number,
        logo_path: string,
        name: string
    }
    export interface Createdby{
        id: number,
        name: string,
    }
    export interface ProductionCompanies{
       id: number,
       logo_path: string,
       name: string, 
    }

    export interface Seasons{
        id: number,
        air_date: string,
        episodes: {
            air_date: string,
            id: number,
            name: string,
            overview: string,
            runtime: number,
            season: number,
            still_path: string,
            guest_stars: {
                character: string,
                id: number,
                name: string,
                profile_path: string
            }
        },
        name: string 
    }

    export interface SeasonEpisodes {
        air_date: string,
        id: number,
        name: string,
        overview: string,
        runtime: number,
        season: number,
        still_path: string,
        episode_number: number,
        season_number: number,
        guest_stars: {
            character: string,
            id: number,
            name: string,
            profile_path: string
        }
    }

    export interface Genres{
        id: number,
        name: string
    }

    export interface Actors{
        id: number,
        image: string,
        name: string, 
        asCharacter: string
    }

    export interface StarActors{
        id: number,
        image: string,
        name: string, 
        asCharacter: string
    }

   export interface SeasonsData {
        id: number,
        name: string,
        episode_count: number,
        overview: string,
        poster_path: string,
        season_number: number
    }

    export interface SeasonsShows {
        id: number,
        name: string,
        episode_count: number,
        overview: string,
        poster_path: string,
        season_number: number
    }


    export interface Directors{
        id: number,
        name: string, 
    }

    export interface Compnaies{
        id: number,
        name: string, 
    }

    export interface Writers{
        id: number,
        name: string, 
    }
    export interface Languages{
        key: string,
        value: string, 
    }

    export interface SimilarMovies{
        id: string,
        image: string,
        title: string,
        poster_path: string,
        
    }

    export interface WatchMovies{
        id: string,
        image: string,
        title: string,
        poster_path: string,
        
    }

    export interface MovieDB{
        id: string
    }

    export interface NextEpisode{
        air_date: string,
        episode_number: number,
        id: number,
        name: string,
        overview: string,
        season_number: number,
        still_path: string,
    }

    export interface LastEpisode{
        air_date: string,
        episode_number: number,
        id: number,
        name: string,
        overview: string,
        season_number: number,
        still_path: string,
    }

    export interface RouterEventDetail {
        from: string | null;
        redirectedFrom: string | null;
        to: string;
      }