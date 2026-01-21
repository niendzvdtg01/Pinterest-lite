import { useFavourite } from "../API/useFavourite"
import '../favourite.scss'
export default function Mansory() {
    const context = useFavourite();
    const data = context.favourites;
    return (
        <>
            <div className="w-100">
                < div className="newmasonry-layout" >
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