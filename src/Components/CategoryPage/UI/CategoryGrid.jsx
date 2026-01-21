import img1 from '../img/nature.jpg'
import img2 from '../img/animal.jpg'
import img3 from '../img/City.jpg'
import img4 from '../img/food.jpg'
import img5 from '../img/people.jpg'
import img6 from '../img/travel.jpg'
import img7 from '../img/game.jpg'
import img8 from '../img/health.jpg'
import CategoryCard from "./CategoryCard"

export const CategoryGrid = () => {
    const cards = [
        { img: img1, content: "nature" },
        { img: img2, content: "animal" },
        { img: img3, content: "city" },
        { img: img4, content: "food" },
        { img: img5, content: "people" },
        { img: img6, content: "travel" },
        { img: img7, content: "game" },
        { img: img8, content: "health" }
    ]
    return (
        <>
            <div className='d-flex' style={{ flexWrap: "wrap" }}>
                {cards.map((data) => (
                    <CategoryCard img={data.img} content={data.content} />
                ))};
            </div>
        </>
    )
}