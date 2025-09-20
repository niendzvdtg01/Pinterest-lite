import './style.scss'
import CustomNav from './Verticalbar'
import dashboard from './img/dashboard.svg'
import restaurant from './img/restaurant.svg'
import user from './img/user.svg'
import order from './img/mangeorder.svg'
import coupons from './img/coupon.svg'
import SearchBar from './SearchBar'
import Landcape from './ImgLandscape'

export default function Gallery() {
    return (
        <>
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
                <div className='col-sm'>
                    <SearchBar />
                    <Landcape />
                </div>

            </div>

        </>
    )
}