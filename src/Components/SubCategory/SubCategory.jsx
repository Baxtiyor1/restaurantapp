import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

//Sass
import './SubCategory.scss'
import '../Home/Home.scss'

//conmonents
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SubCategry() {
    const { cat_id } = useParams()

    const [subCategoryData, setSubCategoryData] = useState([])

    useEffect(() => {
        fetch(`https://choserestaurant.herokuapp.com/subcategory/${cat_id}`)
            .then(res => res.json())
            .then(data => setSubCategoryData(data))
    }, [cat_id])

    return (
        <div className='home'>
            <Header />
            <main className='home__main'>
                <div className="container">
                    <div className="home__wrapper">
                        <div className='home__list'>
                            {
                                subCategoryData.map((e, i) => {
                                    return (<Link key={i} to={`/product/${e.sub_id}`} className='home__item'>
                                        <div className='home__imgbox'>
                                            <img className='home__img' src={e.img} alt="img" />
                                        </div>
                                    </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default SubCategry