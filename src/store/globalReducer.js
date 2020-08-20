const TransactionReducer = ((state, action)=>{
    switch (action.type) {
        case 'ADD_TRANSACTION': {
            return [action.payload, ...state]
        }

        case 'DELETE_TRANSACTION': {
            return [...state.filter((index)=>{ return index.name !== action.transactionName})]
        }

        case 'UPDATE_TRANSACTION':{
            return [ ...state.map(function(item) { return item === state[action.index] ? action.payload : item; })]
        }
 
        default :
            break
            
    }
})

export default TransactionReducer