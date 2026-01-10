import './style.scss'
import CustomNav from './UI/Verticalbar'
import dashboard from './img/dashboard.svg'
import restaurant from './img/restaurant.svg'
import user from './img/user.svg'
import order from './img/mangeorder.svg'
import coupons from './img/coupon.svg'
import SearchBar from './UI/SearchBar'
import WebAPI from './API/WebAPI'
import { useState } from 'react'

export default function Gallery() {
    const [query, setQuery] = useState("")
    return (
        <div>
            <div className='row'>
                <div className='col-sm-2'>
                    <CustomNav
                        li={[
                            ["Dashboard", dashboard],
                            ["Restautant’s", restaurant],
                            ["Manage User’s", user],
                            ["Manage Order’s", order],
                            ["Manage Coupon’s", coupons]
                        ]}
                    />
                </div>
                <div className="col-sm">
                    <div className="header">
                        <SearchBar setQuery={setQuery} />
                    </div>

                    <div className=''>
                        <WebAPI query={query} />
                    </div>
                </div>

            </div>
        </div>
    )
}