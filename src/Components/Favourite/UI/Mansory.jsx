import { useFavourite } from "../API/useFavourite"
import '../favourite.scss'
export default function Mansory() {
    const context = useFavourite();
    const data = context.favourites;
    return (
        <>
            <div className="mt-3 w-100 p-3">
                < div className="masonry-layout" >
                    {
                        data.map((photo) => (
                            <div key={photo.id} className="masonry-item">
                                <a >
                                    <div class="overlay">
                                    </div>

                                    <img
                                        src={photo.imageUrl}
                                        alt={"unsplash picture"}
                                    />
                                </a>
                                <p className="author">
                                    {photo.title}
                                </p>
                            </div>
                        ))
                    }
                </div >
            </div>
        </>
    )
}