import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



import './Header.css'

function Header() {

    const  dispatch = useDispatch()
    const { totalPrice, totalCount } = useSelector(({cart}) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount
    }))

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to = "/">
                        <div className="header__logo">
                            <img width = {60} height = {60} src="/headerLogo.png" alt="Logo" />
                            <h1 className = "header__name">ReBooks</h1>
                        </div>
                    </Link>
                    <Link to = "/cart">
                        <div className="header__rigth">
                            <b className="total__price">{totalPrice} руб</b>
                            <div className = "inner__cart-icon">
                                <img width = {28} height = {28} src="/cart.svg" alt="cart" className  = "cart__icon" />
                                <p className="count__items">{totalCount}</p>
                            </div>
                            
                        </div>
                    </Link>
                </div>
            </div>
            
        </header>
    )
}

export default Header
