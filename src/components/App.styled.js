import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
      /* width: 100%;
     /* padding: 20px 100px; */
     /* padding-left: 6rem; */
     /* @media screen and (max-width: 320px){ */
      /* padding: 0px; */
     }   */
     
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
   
    margin: 20px 100px;
    text-align: center;
    @media screen and (max-width: 320px){
      margin-top:20px;
      margin: 20px auto;
    }
  
`;

export const Link = styled(NavLink)`
/* margin-left: 15px; */
/* gap: 15px; */
margin-right: 10px;
text-transform: uppercase;
text-decoration: none;
font-weight: 700;
font-size: 1.3rem;
color: black;
&.active {
    /* composes: link; */
    color: brown;
  }
`;