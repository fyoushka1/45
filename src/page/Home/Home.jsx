import React from 'react'
import Card from '../../components/Card/Card.jsx'
import Header from '../../components/Header/Header.jsx'
import Categories from '../../components/Categories/Categories.jsx'
import LoadingCard from '../../components/LoadingCard/LoadingCard.jsx'

import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../../redux/actions/books.js'




import './Home.css'
import { setCategory } from '../../redux/actions/filters.js'



function Home(props) {

    const dispatch = useDispatch()

    const items = useSelector(({books}) => books.items)
    const isLoaded = useSelector(({books}) => books.isLoaded)
    const {category} = useSelector(({filters}) => filters)
    const cartItems = useSelector(({cart}) => cart.items)



    const handeleAddBookToCart = (obj) =>{
        dispatch({
            type: "ADD_BOOK_CART",
            payload: obj
        })
    }

    React.useEffect(() =>{
        dispatch(fetchBooks(category));
    },[category])
   
   

    return (
        <div className = "home">
            <Header />
            <Categories onClickItem = {(index) => dispatch(setCategory(index))}/>
            <div className="content">
                <h3 className = "all__items-title">Все Книги</h3>
                {isLoaded ?
                    items.map((obj) => (
                    <Card
                        key = {obj.id}
                        id = {obj.id}
                        title = {obj.name}
                        price = {obj.price}
                        discripshion = {obj.discripshion}
                        imageUrl = {obj.imageUrl}
                        onAddBook = {handeleAddBookToCart}
                       
                    /> 
                    
                )) : Array(6).fill(<LoadingCard />)}  
               
            </div>
            
        </div>
    )
}

export default Home
