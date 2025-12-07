import './style.scss'
export default function UploadPopup(props) {
    //Tao dieu kien de hien thi popup
    return (props.trigger) ? (
        <div className="upload-background">
            <div className='upload-popup'>
                <div className='close-btn'>
                    <button onClick={() => { props.setTrigger(false) }}>x</button>
                </div>
            </div>
        </div>
    ) : ""
}