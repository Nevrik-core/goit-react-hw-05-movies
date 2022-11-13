import { Container, CardWrapper, GalleryItem, GalleryLink, GalleryImg, MovieTitle } from "./MoviesList.styled";
// import { MoviesListItem } from "./MoviesListItem/MoviesListItem";
// import { GalleryItem, Container, GalleryLink, GalleryImg, MovieTitle } from "./MoviesListItem/MoviesListItem.styled";


export const MoviesList = ({movies}) => {

    return (
        <Container>
            {movies.map(({id, imdb_id, name, title, poster_path}) => (
                <div key={id}>
                    <GalleryLink to={`/goit-react-hw-05-movies/movies/${id}`}>
                        <CardWrapper>
                            <GalleryImg src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                            <MovieTitle>{title || name}</MovieTitle>
                        </CardWrapper>
                        </GalleryLink>
                    
                </div>            
    ))}
        </Container>

    )
}