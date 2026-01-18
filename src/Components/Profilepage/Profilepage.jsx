import ProfileProvider from "./API/handleProfileAPI";
import Form from "./UI/Form";
import ProfileCard from "./UI/ProfileCard";
import Header from "./UI/ProfileHeader";
import UploadPhoto from "./UI/UploadPhoto";

export default function Profilepage() {
    return (
        <ProfileProvider>
            <Header />
            <div className="container">
                <div className="row mt-5 border-bottom">
                    <div className="col-sm-4 mb-5"><ProfileCard /></div>
                    <div className="col-sm mb-5"><Form /></div>
                </div>
                <div>
                    <UploadPhoto />
                </div>
            </div>
        </ProfileProvider>
    )
}