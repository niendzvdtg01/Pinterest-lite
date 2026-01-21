import dashboard from '../Body/img/dashboard.svg'
import restaurant from '../Body/img/restaurant.svg'
import user from '../Body/img/user.svg'
import order from '../Body/img/mangeorder.svg'
import coupons from '../Body/img/coupon.svg'
import CustomNav from '../Body/UI/Verticalbar'
import { CategoryGrid } from './UI/CategoryGrid'
export default function Category() {
    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <CustomNav
                            li={[
                                ["Dashboard", dashboard, "/gallery"],
                                ["Restautant’s", restaurant, "/favourite"],
                                ["Manage User’s", user, "/profile"],
                                ["Manage Order’s", order, "/category"],
                                ["Manage Coupon’s", coupons]
                            ]}
                        />
                    </div>
                    <div className="col-sm">
                        <div className="header">
                            <h1 style={{ fontWeight: "bold" }}>Category</h1>
                            <p style={{ fontWeight: "bolder", fontSize: "20px" }}>Explore the world through collections of beautiful images free to use under</p>
                        </div>
                        <div className='justify-content-center'>
                            <CategoryGrid />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}