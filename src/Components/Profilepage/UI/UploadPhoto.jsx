import { useProfile } from "../API/useProfile"

export default function UploadPhoto() {
    const context = useProfile();
    const data = context.uploadPhoto;
    console.log(data);
    return (
        <>
            <div className="mt-3 w-100 p-3">
                < div className="masonry-layout" >
                    {
                        data.map((photo) => (
                            <div key={photo.photoId} className="masonry-item">
                                <a >
                                    <div className="overlay">
                                    </div>

                                    <img
                                        src={photo.imgUrl}
                                        alt={"unsplash picture"}
                                    />
                                </a>
                                <p className="author">
                                    {photo.username}
                                </p>
                            </div>
                        ))
                    }
                </div >
            </div>
        </>
    )
}