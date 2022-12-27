export default function Social(props){
    return(
        <li className="social">
            <img src={props.img} alt="social" />
            <a href={props.link} target="_blank" rel="noreferrer">{props.name}</a>
        </li>
    )
}