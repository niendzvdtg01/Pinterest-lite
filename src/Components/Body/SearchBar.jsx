import './style.scss'
import searchicon from './img/searchicon.svg'
import UploadPopup from './UploadPopup'
import { useState } from 'react'

export default function SearchBar({ setQuery }) {
    const [click, setClick] = useState(false);
    // console.log(query)
    return (
        <><div className="container position-fixed d-flex"
            style={{
                backgroundColor: "white",
                borderRadius: "0 0 30px 30px",
            }}
        >
            <div className="row justify-content-center w-100">
                <div className='search-container mt-3'>
                    <img src={searchicon} alt="" />
                    <input type="text" placeholder='Search...' className='search-input'
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }} />
                </div>
            </div>
            <div className='upload-btn'>
                <button onClick={() => { setClick(true) }}>Upload image</button>
            </div>
        </div>
            <UploadPopup trigger={click} setTrigger={setClick} />
        </>
    )
}