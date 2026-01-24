import '../style.scss'
import ImgDetails from './ImageDetails'
import { useState } from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Landcape(props) {
    const data = props.data;
    // const loading = props.loading;
    const [loadingImage, setLoadingImage] = useState(true);
    const [click, setClick] = useState(false);
    const [image, setImage] = useState([])
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
                        <div key={photo.photoId} className="masonry-item">
                            {loadingImage && (
                                <Skeleton
                                    height={300}
                                    width="30%"
                                    style={{ margin: "0 auto" }}
                                />
                            )}
                            <a onClick={() => {
                                setClick(true)
                                setImage(photo)
                            }} >
                                <div class="overlay">
                                </div>
                                <img
                                    src={photo.imageUrl}
                                    alt={photo.descriptions || "unsplash picture"}
                                    onLoad={() => setLoadingImage(false)}
                                />
                            </a>
                            <p className="author">
                                {photo.title}
                            </p>
                        </div>
                    ))
                }
                <ImgDetails trigger={click} setTrigger={setClick} data={image} />
            </div >
        </div >
    )
}