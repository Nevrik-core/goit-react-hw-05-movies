import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin: 0 100px;
    text-align: center;
  
`;

export const Link = styled(NavLink)`
margin-left: 15px;
/* margin-right: 10px; */
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