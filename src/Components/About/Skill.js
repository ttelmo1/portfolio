export default function Skill (props){
    return(
        <li className="skill">
            <img src={props.img} alt="skill" />
            <p>{props.name}</p>
        </li>
    )
}