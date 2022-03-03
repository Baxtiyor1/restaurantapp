import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

//SASS
import './Header.scss'

function Header() {
    const navigate = useNavigate();
    
    const [allCategory, setAllcategory] = useState([])
    const selection = useRef()

    useEffect(() => {
        fetch('https://choserestaurant.herokuapp.com/category')
            .then(res => res.json())
            .then(data => setAllcategory(data))
    }, [])

    function selectCategory(e){
        e.preventDefault()
        navigate(`/subcategory/${selection.current.value}`)
    }
    
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <img className="header__logo" src="https://seeklogo.com/images/R/restaurant-brand-ribbon-logo-86E491477A-seeklogo.com.png" alt="logo" />
                    <form onSubmit={selectCategory} className='header__form'>
                        <select ref={selection} className='header__select'>
                            <option disabled className='header__option'>All</option>
                            {
                                allCategory.map((e, i) => {
                                    return <option key={i} className='header__option' value={e.id}>{e.name}</option>
                                })
                            }
                        </select>
                        <button className='header__btn' type='submit'>Search</button>
                    </form>
                    <div className="header__box">
                        <Link className="header__link" to='/bascet'><ion-icon name="cart-outline"></ion-icon></Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header