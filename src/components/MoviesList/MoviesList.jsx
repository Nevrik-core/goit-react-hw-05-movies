import { Container, CardWrapper, GalleryLink, GalleryImg, MovieTitle } from "./MoviesList.styled";
import noPoster from './noPoster.jpg';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({movies}) => {
const location = useLocation();
console.log(location)

    return (
        <Container>
            {movies.map(({id, name, title, poster_path}) => (
                <div key={id}>
                    <GalleryLink to={`/goit-react-hw-05-movies/movies/${id}`} state={{ from: location }}>
                        <CardWrapper>
                            <GalleryImg src={
                                poster_path
                                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                    : noPoster} alt={title} />
                            <MovieTitle>{title || name}</MovieTitle>
                        </CardWrapper>
                        </GalleryLink>
                    
                </div>            
    ))}
        </Container>

    )
}