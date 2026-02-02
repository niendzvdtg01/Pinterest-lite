export default function CategoryCard(props) {
    return (
        <>
            <div
                className="card m-3 shadow-sm border-0"
                style={{ width: "20%", minWidth: "240px" }}
            >
                <img
                    src={props.img}
                    className="card-img-top"
                    alt="Category"
                    style={{ height: "180px", objectFit: "cover" }}
                />

                <div className="card-body">
                    <h5 className="card-title mb-2">
                        Explore This Collection
                    </h5>

                    <p className="card-text text-muted">
                        {props.content}
                    </p>

                    <button
                        className="btn btn-outline-dark w-100"
                        onClick={props.onClick}
                    >
                        View Gallery
                    </button>
                </div>
            </div>
        </>
    )
}
