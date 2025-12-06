import './style.scss'

export default function Landcape({ data = [] }) {

    if (!data.length) {
        return (
            <p className="text-center mt-5 text-muted">
                No images to display
            </p>
        )
    }

    return (
        <div className="mt-3 w-100 p-3">
            < div className="masonry-layout" >

                {
                    data.map((photo) => (
                        <div key={photo.id} className="masonry-item">
                            <img
                                src={photo.urls.small}
                                alt={photo.alt_description || "unsplash picture"}
                            />

                            <p className="author">
                                {photo.user?.name}
                            </p>
                        </div>
                    ))
                }

            </div >
        </div >
    )
}
