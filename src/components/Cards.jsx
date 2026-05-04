const Card = ({title,  description, buttonText}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>

            {buttonText && <button>{buttonText}</button>}
        </div>
    )
}

export default Card