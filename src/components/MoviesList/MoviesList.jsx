import { Gallery, Container, GalleryItem, GalleryLink, GalleryImg, MovieTitle } from "./MoviesList.styled";
// import { MoviesListItem } from "./MoviesListItem/MoviesListItem";
// import { GalleryItem, Container, GalleryLink, GalleryImg, MovieTitle } from "./MoviesListItem/MoviesListItem.styled";


export const MoviesList = ({movies}) => {

    return (
        <div>
            <Gallery>
                {movies.map((movie) => (
                    <>
                        <GalleryItem key={movie.id}>
                            <Container>
                                <GalleryLink>
                                    <div>
                                        <GalleryImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    </div>
                                    <MovieTitle>{movie.title || movie.name}</MovieTitle>
                                </GalleryLink>
                            </Container>
                       </GalleryItem>
                        
                        </>
                    
        ))}
            </Gallery>
        </div>

    )
}