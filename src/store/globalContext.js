import React, { createContext, useReducer } from "react"
import TransactionReducer from './globalReducer'

const initialTransactions = [
    {
        name: 'Cash',
        amount: '200',
        date: '05:47:39'
    },
]

export const TransactionContext = createContext(initialTransactions)


export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transactionObj) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                name: transactionObj.name,
                amount: transactionObj.amount,
                date: transactionObj.date  
            }
        })
    }

    function deleteTransaction(name) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            transactionName: name
        })
    }

    function updateTransaction(index, transactionObj) {
        dispatch({
            type: 'UPDATE_TRANSACTION',
            index: index,
            payload: {
                name: transactionObj.name,
                amount: transactionObj.amount,
                date: transactionObj.date  
            }
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction,
            updateTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}