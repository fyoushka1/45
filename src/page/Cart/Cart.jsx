import React from 'react'

import CartItem from '../../components/CartItem/CartItem'
import Header from '../../components/Header/Header'

import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeCartItem, plusItem, minusItem } from '../../redux/actions/cart'

import './Cart.css'
import { Link } from 'react-router-dom'

function Cart() {
    const dispatch = useDispatch()
    const {totalPrice, totalCount, items} = useSelector(({cart}) => cart);

    const groupBooks = Object.keys(items).map(key =>{
        return(
            items[key].items[0]
        )
    })

    const onClearCart = () => {
        if(window.confirm('Очистить корзину')){
            dispatch(clearCart())
        }
    }
    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id))
    }

    const onPlusItem = (id) => {
        dispatch(plusItem(id))

    }
    const onMinusItem = (id) => {
        dispatch(minusItem(id))

    }

    return (
        <div className="cart">
            <Header />
           { totalCount ?
                <div className="cart__content">
                <h1 className="cart__content-title">
                    Корзина:
                    <b onClick = {onClearCart}>Очистить</b>
                </h1>
                <div className="cart__inner">
                    {
                        groupBooks.map(obj => 
                        <CartItem
                        key = {obj.id}
                        id = {obj.id}
                        title={obj.title} 
                        price={obj.price}
                        imageUrl = {obj.imageUrl} 
                        totalPrice={items[obj.id].totalPrice}
                        totalCount={items[obj.id].items.length}
                        onRemoveItem = {onRemoveItem}
                        onPlusItem = {onPlusItem}
                        onMinusItem = {onMinusItem}
                         />)
                    }
                     
                </div>
                <div className="footer__result">
                    <div className="footer__result-top">
                        <p className="footer__result-items">
                            Всего книг : <b>{totalCount}</b> шт.
                        </p>
                        <p className="footer__result-price">
                            Заказ на сумму: <b>{totalPrice} руб</b>
                        </p>
                    </div>
                    <div className="footer__result-buttom">
                        <Link to="/">
                            <button className="footer__result-btn-back">
                                Назад
                            </button>
                        </Link>
                        <button className="footer__result-btn-pay">
                            Оплатить
                        </button>
                    </div>
                </div>
            </div> :
            <div className = "empty__cart">
                <img src="../../box.png" alt="" className="empty__cart-img" />
                <h1>Корзина пуста</h1>
            </div>
            }
            
        </div>
    )
}

export default Cart
