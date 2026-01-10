function Card(props) {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;