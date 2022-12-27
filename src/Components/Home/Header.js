import { Link } from "react-router-dom";
import { StyledHeader, StyledLogo, StyledUl } from "./style";

export default function Header(){
    return(
        <StyledHeader className="header">
        <StyledUl className="ul">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>Sobre mim</Link>
            {/* <Link to={'/projects'}>Projetos</Link> */}
            <Link to={'/contact'}>Contato</Link>
        </StyledUl>
        <StyledLogo>
          Telmo Jr
        </StyledLogo>
      </StyledHeader>
    )
}