import axios from "axios"

export const setLoaded = (payload) =>({
    type: 'SET_LOADED',
    payload,
})


export const fetchBooks = (category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/books?${category !== null ? `category=${category}` : ''}`).then(({data}) => {
        dispatch(setBooks(data))
    })
}

export const setBooks = (items) =>({
    type: 'SET_BOOKS',
    payload: items,
})
