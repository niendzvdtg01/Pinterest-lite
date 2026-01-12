
import dashboard from '../Body/img/dashboard.svg'
import restaurant from '../Body/img/restaurant.svg'
import user from '../Body/img/user.svg'
import order from '../Body/img/mangeorder.svg'
import coupons from '../Body/img/coupon.svg'

import SearchBar from "../Body/UI/SearchBar"
import CustomNav from "../Body/UI/Verticalbar"
export default function Favourite() {
    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <CustomNav
                            li={[
                                ["Dashboard", dashboard, "/gallery"],
                                ["Restautant’s", restaurant, "/favourite"],
                                ["Manage User’s", user],
                                ["Manage Order’s", order],
                                ["Manage Coupon’s", coupons]
                            ]}
                        />
                    </div>
                    <div className="col-sm">
                        <div className="header">
                            <SearchBar />
                        </div>

                        <div className=''>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}