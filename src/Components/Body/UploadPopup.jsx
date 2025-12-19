import './style.scss'
import img from './img/image-regular-full.svg'
import { useRef, useState } from 'react'
import axios from 'axios';
export default function UploadPopup(props) {
    const fileInput = useRef(null);
    const [filename, setFilename] = useState([])
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleFileInput = (event) => {
        const fileUpload = event.target.files[0];
        setFilename(fileUpload);
        setFile(fileUpload);
    }
    const handleClick = () => {
        fileInput.current.click();
    }
    const UploadAPI = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("title", title)
            formData.append("descriptions", description)
            const res = await axios.post("http://localhost:8080/gallery_database/photo/post", formData,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                }
            )
            console.log(res.data)
            alert("Upload file thanh cong")
        } catch (err) {
            console.log(err);
        }
    }
    //Tao dieu kien de hien thi popup
    return (props.trigger) ? (
        <div className="upload-background">
            <div className='upload-popup'>
                <div className='close-btn'>
                    <button onClick={() => { props.setTrigger(false) }}>x</button>
                </div>
                <div className='d-flex w-100'>
                    <img src={img} alt="upload img" style={{
                        width: "200px",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto"
                    }} />
                </div>
                <input type="file"
                    ref={fileInput}
                    onChange={handleFileInput}
                    accept="image/*"
                    style={{ display: "none" }}
                />
                <div className='d-flex image-input'>
                    <input type="text" placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className='d-flex image-input'>
                    <input type="text" placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div className='upload-btn d-flex'>
                    <button onClick={handleClick} style={{ margin: "0 auto" }}>Choose file</button>
                </div>
                <div className='upload-btn d-flex'>
                    <button onClick={UploadAPI} style={{ margin: "0 auto" }}>Upload file</button>
                </div>
                <div className='d-flex'>
                    <p style={{ margin: "0 auto" }}>{filename.name || "no image chosen"}</p>
                </div>
            </div>
        </div>
    ) : ""
}