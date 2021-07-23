const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    delPrice: 0,
    delCount:0,
 }
 
 const cart = (state = initialState, action) => {
    if(action.type === 'ADD_BOOK_CART'){
         const currentItems = !state.items[action.payload.id] 
         ? [action.payload]
         : [...state.items[action.payload.id].items, action.payload]
         const newItems = {
            ...state.items,
               [action.payload.id]: {
               items: currentItems,
               totalPrice: currentItems.reduce((sum, obj) => obj.price + sum, 0)
             }         
        }
        return{
           ...state,
           items: newItems,
           totalCount: state.totalCount + 1,
           totalPrice: Number(state.totalPrice) + Number(action.payload.price)
            
        }
    }
     if(action.type === 'CLEAR_CART'){
         return{
            ...state,
            items: {},
            totalPrice: 0,
            totalCount: 0,
         }
     }

     if(action.type === 'REMOVE_CART_ITEM'){
        const newItems ={
           ...state.items
        }
        const currentTotalPrice = newItems[action.payload].totalPrice
        const currentTotalCount = newItems[action.payload].items.length
        delete newItems[action.payload]
      return{
         ...state,
         items: newItems,
         totalCount: state.totalCount - currentTotalCount,
         totalPrice: state.totalPrice - currentTotalPrice
      }
  }
  if(action.type === 'PLUS_CART_ITEM'){
   return{
      
   }
}
   if(action.type === 'MINUS_CART_ITEM'){
      return{
         ...state
        
      }
   }
   
    
     return state
 }
 
 export default cart