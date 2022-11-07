import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const Gallery = styled.ul`
 display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryItem = styled.li`

`;

export const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  height: 95%;
  
`;

export const GalleryLink = styled(Link)`
text-decoration: none;`;

export const GalleryImg = styled.img`
  width: 100%;
`;

export const MovieTitle = styled.p`
text-transform: uppercase;
/* text-decoration: none; */
color: black;
/* font: 1.2rem "Fira Sans", sans-serif; */

`;