import './Card.css'

function Card(props)
{
    return(
        <div className = "Card">
        <h2>{props.name}</h2>
        <img src= {props.src} alt = {props.name} />
        <p>{props.date}</p>
        <p>{props.education}</p>
        <p>{props.country}</p>
        </div>
    )
}

export default Card