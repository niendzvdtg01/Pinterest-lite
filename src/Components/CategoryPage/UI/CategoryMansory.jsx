import { useContext } from 'react'
import '../Category.scss'
import { CategoryContext } from '../API/CategoryContext'
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Mansory(props) {
    const context = useContext(CategoryContext);
    const data = context.data
    console.log(data)
    return (
        (props.trigger == false) ?
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
            </> : ""
    )
}