import cv from "./cv.svg";

export default function Cv(){
    return(
        <div className="cv">
            <a href="./cv_telmo.pdf" download="cv_telmo.pdf">
                <img src={cv} alt="cv" />
                <p>Faça download do meu CV</p>
            </a>
        </div>
    )
}