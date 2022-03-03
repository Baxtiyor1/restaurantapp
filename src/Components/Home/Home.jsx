import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//SASS
import './Home.scss'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Home() {
    
    const [allCategory, setAllCategory] = useState([])

    useEffect(() => {
        fetch('https://choserestaurant.herokuapp.com/category')
            .then(res => res.json())
            .then(data => setAllCategory(data))
    }, [])

    
    return (
        <div className='home'>
            <Header />
            <main className='home__main'>
                <div className="container">
                    <div className="home__wrapper">
                        <ul className='home__list'>
                            {
                                allCategory.map((e, i) => {
                                    return (
                                        <Link to={`/subcategory/${e.id}`} key={i} className='home__item'>
                                            <div className='home__imgbox'>
                                                <img className='home__img' src={e.img} alt="img" />
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home