import React from 'react'

import './CartItem.css'

function CartItem({id,title,imageUrl, totalPrice, totalCount, onRemoveItem, onMinusItem, onPlusItem}) {

    const handleRemoveClick = () => {
        onRemoveItem(id)
    }

    const handlePlusItem = () =>{
        onPlusItem(id)
    }
    const handleMinusItem = () =>{
        onMinusItem(id)
    }

    return (
        <div className="cart__item">
            <img width = {195} height = {290} src={imageUrl} alt="" className="cart__item-img" />
            <div className="cart__item-inner">
                <h4 className="cart__item-title">
                    {title}
                </h4>
                <div className="cart__item-counts">
                    <img  width = {34} height = {34} src="../../add.svg" alt="plus" className = "cart__item-plus"/>
                        <b className="cart__item-count">{totalCount}</b>
                    <img  width = {34} height = {34} src="../../minus.svg" alt="minus" className = "cart__item-minus"/>
                </div>
                <b className="cart__item-price">{totalPrice} руб</b>
                <img onClick = {handleRemoveClick} width = {34} height = {34} src="../../rubbish.svg" alt="" className="cart__item-remove" />
            </div>
        </div>
    )
}

export default CartItem
