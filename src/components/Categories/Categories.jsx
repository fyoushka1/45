import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../../redux/actions/filters'


import './Categories.css'

function Categories({ onClickItem }) {
    const dispatch = useDispatch()

    const items = ['JavaScript','Python','C++','C#','Java']

    const {category} = useSelector(({filters}) => filters)
   
    const onSelectCategory = React.useCallback((index) =>{
        dispatch(setCategory(index))
    },[])

    return (
        <div className="header__category">
            <div className="container">
                <ul className="category__items">
                    <li onClick = {() => onSelectCategory(null)} className={category === null ? 'category__item--active' : 'category__item'}>
                        Все
                    </li>
                    {
                        items &&
                            items.map((name, index) => (
                                <li 
                                className = {category === index ? 'category__item--active' : 'category__item'}
                                onClick = {() => onSelectCategory(index)}
                                key = {`${name}_${index}`}
                                >{name}</li>
                            ))
                    }
                    {console.log(category)}
                </ul>
            </div>
        </div>  
    )
}

export default Categories
