const Card = ({title, price, description, thumbnail}: {title: string, price: number, description: string, thumbnail: string}) => {
    return (
        <article>
            <h3>{title}</h3>
            <span>{price}</span>
            <p>{description}</p>
            <button>Order a delivery + icon</button>
        </article>
    )
}

export default Card