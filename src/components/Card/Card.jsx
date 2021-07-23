import React from 'react'
import ContentLoader from "react-content-loader"

import './Card.css'


function Card({id, title, discripshion, price, imageUrl, onAddBook}) {
    const onAddBookToCart = () => {
        const obj = {
            id,
            title,
            imageUrl,
            price
        }
        onAddBook(obj)
    }
   



    return (
        <div className="card">
        <img width = {292} height = {409} src={imageUrl} alt="" />
        <div className="card__content">
            <h4 className="card__title">
               {title}
            </h4>
            <p className="card__text">
                {discripshion}
            </p>
            <div className="price__inner">
                <p className="price">Цена:<b>{price} руб.</b></p>
            </div>
            <div className="button__inner">
                <button  onClick = {onAddBookToCart} className="card__btn">
                    Добавить в корзину
                </button>
                <img width = {45} height = {45} src="../../heart.svg" alt="" className="favorite__img" />
            </div>
        </div>
        
    </div>
    )
}

export default Card

