import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//SASS
import './product.scss'

//components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Product() {
    const { sub_id } = useParams()
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch(`https://choserestaurant.herokuapp.com/product/${sub_id}`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [sub_id])

    function addBascet(e) {
        const id = e.target.dataset.id
        const findProduct = productData.find(e => e.id === id)
        if(findProduct){
            window.localStorage.setItem('product', JSON.stringify(findProduct))
            alert('Mahsulot savatga qo`shildi')
        }
    }

    return (
        <>
            <Header />
            <main className='product'>
                <div className="container">
                    <div className="product__wrapper">
                        <ul className='product__list'>
                            {
                                productData.map((e, i) => {
                                    return (
                                        <li key={i} className='product__item'>
                                            <img className='product__img' src={e.img} alt="img" />
                                            <h2 className='product__title'>{e.name}</h2>
                                            <p className='product__text'>Price: <span className='product__price'>{e.price}</span></p>
                                            <p className='product__text'>{e.desc}</p>
                                            <button data-id={e.id} onClick={addBascet} className='product__btn'>
                                                <ion-icon name="cart-outline"></ion-icon>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Product