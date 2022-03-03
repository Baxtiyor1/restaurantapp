

//SASS
import './Bascet.scss'
import '../Products/product.scss'

//components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Bascet() {
    const array = [];
    const bascetData = JSON.parse(localStorage.getItem('product')) || null;
    array.push(bascetData)
    
    return (
        <div className='bascet__body'>
            <Header />
            <main className='bascet__main'>
                <div className="container">
                    <div className="bascet__wrapper">
                        <div className="bascet__aside">
                            {
                                array.length == 1 ? array.map((e, i) => {
                                    return (
                                        <li key={i} className='product__item'>
                                            <img className='product__img' src={e.img} alt="img" />
                                            <h2 className='product__title'>{e.name}</h2>
                                            <p className='product__text'>Price: <span className='product__price'>{e.price}</span></p>
                                            <p className='product__text'>{e.desc}</p>
                                        </li>
                                    )
                                }) : <h2 className='bascet__title'>Bascet is empty</h2>
                            }
                        </div>
                        <div className="bascet__list">
                            <form className="bascet__form" action="">
                                <input className="bascet__input" type="text" placeholder='Ismingizni kiriting'/>
                                <input className="bascet__input" type="text" placeholder='Yashash manzilingizni kiriting'/>
                                <input className="bascet__input" type="email" placeholder='Emailingizni kiriting'/>
                                <button type='submit' className="bascet__btn">Rasmiylashtirish</button>
                            </form>
                        </div>  
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Bascet