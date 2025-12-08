import './style.scss'
import ImgDetails from './ImageDetails'
import { useState } from 'react'
export default function Landcape({ data = [] }) {
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
                        <div key={photo.id} className="masonry-item">
                            <a onClick={() => {
                                setClick(true)
                                setImage(photo)
                            }} >
                                <div class="overlay">
                                </div>

                                <img
                                    src={photo.urls.small}
                                    alt={photo.alt_description || "unsplash picture"}
                                />
                            </a>
                            <p className="author">
                                {photo.user?.name}
                            </p>
                        </div>
                    ))
                }
                <ImgDetails trigger={click} setTrigger={setClick} data={image} />
            </div >
        </div >
    )
}