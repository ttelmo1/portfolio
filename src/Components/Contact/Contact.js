import Iframe from "react-iframe";
import { CONTACT } from "../About/Constants";
import { StyledTitle } from "../About/style";
import Header from "../Home/Header";
import Social from "./Social";
import { StyledCity, StyledContact, StyledLinksList, StyledMyLinks } from "./style";


export default function Contact(){
    return(
        <StyledContact>
            <Header/>
            <StyledTitle>
                <h1>Contato</h1>
            </StyledTitle>
            <div className="info-container">
                <StyledMyLinks>
                    <h2>Me encontre nas redes sociais:</h2>
                    <StyledLinksList>
                        <div className="center">
                            {CONTACT.map((contact) => <Social key={contact.id} img={contact.img} link={contact.link} name={contact.name} />)}
                        </div>
                    </StyledLinksList>
                </StyledMyLinks>
                <StyledCity>
                    <h2>De onde eu sou:</h2>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235199.33674884817!2d-43.58606616602445!3d-22.91375308516259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1672153475430!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </StyledCity>
            </div>
        </StyledContact>
    )
}