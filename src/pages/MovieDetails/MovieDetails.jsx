import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchMovieByID } from "services/fetch";

import { BackLink } from "components/BackLnk/BackLink";
import { Wrapper, InfoWrapper, PosterImg, Container } from "./MovieDetails.styled";

export function MovieDetails() {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null)

    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/goit-react-hw-05-movies/";

    useEffect(() => {
        (async function showMovieDetails() {
            try {
                const movie = await fetchMovieByID(movieId);
                // console.log(movie);
                setMovieInfo(movie);
            } catch (error) {
                console.log(error)
            }
        })();
      
    
    },[movieId])
    return (
        <Container>
            <BackLink to={backLinkHref}>Back</BackLink>
            {movieInfo && (
                
                <Wrapper>
                    <PosterImg src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={movieInfo.title} />
                    <InfoWrapper>
                        <h2>{`${movieInfo.title} (${movieInfo.release_date.slice(0, 4)})`}</h2>
                            <p>{`User score: ${Number.parseInt(movieInfo.vote_average * 10)}%`}</p>
                            <h3>Overview</h3>
                            <p>{movieInfo.overview}</p>
                            <h3>Genres</h3>
                            <p>{movieInfo.genres.map(({ name }) => `${name}`).join(', ')}</p>
                        </InfoWrapper>
           </Wrapper>)}
       
      </Container>
    )
}