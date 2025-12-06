import './style.scss'
import searchicon from './img/searchicon.svg'
import WebAPI from './WebAPI'

export default function SearchBar({ setQuery }) {
    // console.log(query)
    return (
        <div className="container position-fixed "
            style={{
                backgroundColor: "white",
                borderRadius: "0 0 30px 30px",
            }}
        >
            <div className="row justify-content-center">
                <div className='search-container mt-3'>
                    <img src={searchicon} alt="" />
                    <input type="text" placeholder='Search...' className='search-input'
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}