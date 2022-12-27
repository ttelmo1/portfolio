import {StyledCv, StyledHello, StyledHome, StyledImg, StyledMain, StyledProjects, StyledQuote} from "./style";
import profile from "./perfil_02.jpg";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import login_zap_recall from "./login_zap_recall.png";
import login_cineflex from "./login_cineflex.png";
import login_trackit from "./login_trackit.png";
import Cv from "./Cv";




export default function Home() {
  const PROJECTS = [
    <img src="./trackit.png" alt="trackit" />,
    <img src="./zap_recall.png" alt="zap_recall" />,
    <img src="./cineflex.png" alt="cineflex" />
  ]

  return (
    <StyledHome>
      <Header />
      <div className="main-container">
        <StyledMain>
            <div className="hello">
            <StyledImg src={profile} alt="gif" />
              <StyledHello>
                <h1>Olá, eu sou o</h1>
                <p>Telmo</p>
                <h1>e sou Desenvolvedor Front-End</h1>
              </StyledHello>
            </div>
            <StyledCv>
             <Cv />
            </StyledCv>
            <StyledQuote>
              <p>Heart and soul in every line of code</p>
            </StyledQuote>
        </StyledMain>
        <StyledProjects>
          <h1>Alguns de meus projetos:</h1>
          <div className="carousel-container">
            <Carousel>
              <Carousel.Item interval={5000}>
                <img className="d-block w-100" src={login_trackit} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img className="d-block w-100" src={login_zap_recall} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img className="d-block w-100" src={login_cineflex} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </StyledProjects>
      </div>
    </StyledHome>
  );
}



