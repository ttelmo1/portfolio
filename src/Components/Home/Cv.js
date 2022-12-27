import cv from "./cv.svg";

export default function Cv(){
    return(
        <div className="cv">
            <a href="https://drive.google.com/file/d/1GK_bEUPYeL8E00kYn4J-DAOl3AyLOxlj/view" download="cv_telmo">
                <img src={cv} alt="cv" />
                <p>Faça download do meu CV</p>
            </a>
        </div>
    )
}