import Header from "../Home/Header";
import { SKILLS } from "./Constants";
import Skill from "./Skill";
import { StyledAbout, StyledInfo, StyledMe, StyledSkill, StyledSkills, StyledSkillsList, StyledTitle } from "./style";


export default function About() {
  return (
    <StyledAbout>
      <Header/>
      <StyledTitle>
        <h1>Sobre mim</h1>
      </StyledTitle>
      <StyledInfo>
        <StyledMe>
            <h2>Quem eu sou?</h2>
            <p>Meu nome é Telmo, sou apaixonado por tecnologia e por aprender coisas novas, e estou sempre em busca de novos desafios e oportunidades.<br/>
                Anteriormente estudei Ciências Militares na Academia Militar das Agulhas Negras, onde tive a oportunidade de exercer com excelência o papel de Cadete do Exército Brasileiro.<br/>
                Pórem decidi seguir uma nova carreira como Engenhero de Software e estou cada vez mais apaixonado por essa área.<br/>
                Estou cursando o 3º período de Análise e Desenvolvimento de Sistemas na Faculdade Unyleya, onde estou aprendendo a desenvolver aplicações web e mobile.<br/>
                Também estou cursando o bootcamp da Driven Education, para me formar como Desenvolvedor Full-Stack.
            </p>
        </StyledMe>
        <StyledSkills>
            <h2>Minhas Skills:</h2>
            <StyledSkillsList>
                {SKILLS.map((skill) => ( <Skill img={skill.img} name={skill.name} /> ))}
            </StyledSkillsList>
            <h2>Um pouco mais:</h2>
            <p>Também possuo certificação em Inglês e Espanhol emitidos pelo centro de idiomas do Exército Brasileiro.<br/>
                Estou iniciando meus estudos na parte Back-End, com foco em NodeJS e Python.<br/>
                No meu CV e no Linkedin você pode ver mais sobre meus outros certificados e projetos.
            </p>
        </StyledSkills>
      </StyledInfo>
    </StyledAbout>
  );
}