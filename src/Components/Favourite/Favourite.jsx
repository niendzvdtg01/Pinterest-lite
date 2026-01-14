
import dashboard from '../Body/img/dashboard.svg'
import restaurant from '../Body/img/restaurant.svg'
import user from '../Body/img/user.svg'
import order from '../Body/img/mangeorder.svg'
import coupons from '../Body/img/coupon.svg'

import SearchBar from "../Body/UI/SearchBar"
import CustomNav from "../Body/UI/Verticalbar"
import Mansory from './UI/Mansory'
import { FavouriteProvider } from './API/handleFavouriteAPI'
export default function Favourite() {
    return (
        <FavouriteProvider>
            <div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <CustomNav
                            li={[
                                ["Dashboard", dashboard, "/gallery"],
                                ["Restautant’s", restaurant, "/favourite"],
                                ["Manage User’s", user, "/profile"],
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
                            <Mansory />
                        </div>
                    </div>

                </div>
            </div>
        </FavouriteProvider>
    )
}