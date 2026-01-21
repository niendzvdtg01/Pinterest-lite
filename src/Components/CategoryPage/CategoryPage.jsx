import dashboard from '../Body/img/dashboard.svg'
import restaurant from '../Body/img/restaurant.svg'
import user from '../Body/img/user.svg'
import order from '../Body/img/mangeorder.svg'
import coupons from '../Body/img/coupon.svg'
import CustomNav from '../Body/UI/Verticalbar'
import { CategoryGrid } from './UI/CategoryGrid'
import Mansory from './UI/CategoryMansory'
import { useState } from 'react'
import CategoryHandleAPI from './API/CategoryhandleAPI'
export default function Category() {
    const [click, setClick] = useState(true);
    return (
        < CategoryHandleAPI>
            <div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <CustomNav
                            li={[
                                ["Dashboard", dashboard, "/gallery"],
                                ["Category", order, "/category"],
                                ["Collection", restaurant, "/favourite"],
                                ["User", user, "/profile"],
                                ["Feedback", coupons]
                            ]}
                        />
                    </div>
                    <div className="col-sm">
                        <div className="header">
                            <h1 style={{ fontWeight: "bold" }}>Category</h1>
                            <p style={{ fontWeight: "bolder", fontSize: "20px" }}>Explore the world through collections of beautiful images free to use under</p>
                        </div>
                        <div className='justify-content-center'>
                            <CategoryGrid setClick={setClick} />
                        </div>
                        <div className='justify-content-center'>
                            <Mansory trigger={click} />
                        </div>
                    </div>

                </div>
            </div>
        </CategoryHandleAPI>
    )
}