export default function CategoryCard(props) {
    return (
        <>
            <div className="card m-3" style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top" alt="Category Image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-primary" onClick={props.onClick}>Go somewhere</a>
                </div>
            </div>
        </>
    )
}