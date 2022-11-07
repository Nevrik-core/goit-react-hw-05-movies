import { LayoutStyle, Link } from "./Layout.styled";
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    return (
        <>
        <LayoutStyle>
            <nav>
                <Link to="/goit-react-hw-05-movies/">Home</Link>
                <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
            </nav>
            <Outlet/>
            </LayoutStyle>
        </>
    )
}