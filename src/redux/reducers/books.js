const initialState = {
    items: [],
    isLoaded: false
 }
 
 const books = (state = initialState, action) => {
     if(action.type === 'SET_BOOKS'){
         return{
             ...state,
             items: action.payload,
             isLoaded: true
             
         }
     }
     if(action.type === 'SET_LOADED'){
        return{
            ...state,
            isLoaded:action.payload
            
        }
    }
     return state
 }
 
 export default books