import React, { useContext, useState } from 'react'
import {TransactionContext} from '../store/globalContext'

function ViewExpenseList(props) {

    let {transactions, deleteTransaction, updateTransaction} = useContext(TransactionContext)
    let [newName, setName] = useState('');
    let today = Date();
    let [newAmount, setAmount] = useState('');
    let [edit, setEdit] = useState(true)
    let [newIndex, setIndex] = useState(0);

    function handleTransactionDelete(transactionName) {
        deleteTransaction(transactionName)
    }
    function handleTransactionEdit(name, amount, index) {
        setName(name)
        setAmount(amount)
        setIndex(index)
        setEdit(false)
    }
    function handleTransactionUpdate() {
        setEdit(true)
        updateTransaction(newIndex, {
            name: newName,
            amount: newAmount,
            date: today.slice(16,24) 
        })
    }

    return(
        <div>
            <ul className={` ${props.mode ? 'LightexpenseList' : 'DarkexpenseList'} `}>
                {
                    transactions.map((transactionObj, index)=>{
                        return(
                            <li key={index} className={` ${Number(transactionObj.amount) > 0 ? 'incomeBorder' : 'expenseBorder'} `}>
                                <span className="expenseListName">{transactionObj.name}</span>
                                <small>{transactionObj.date}</small>
                                <span className="expenseListAmount">${transactionObj.amount}</span>
                                <span>
                                    <button onClick={(event)=> {event.preventDefault(); handleTransactionEdit(transactionObj.name, transactionObj.amount, index) }}>EDIT</button> <button onClick={(event)=> {event.preventDefault(); handleTransactionDelete(transactionObj.name) }}>DELETE</button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={` ${edit ? 'hidden' : ''}`}>
                <div className={` ${props.mode ? 'LightexpenseListEdit' : 'DarkexpenseListEdit'}`}>
                    <form>
                        <h4>EDIT Expense</h4>
                        <div className={` ${props.mode ? 'Lightaddexpense' : 'Darkaddexpense'} `}>
                            <input required type="text" placeholder="Update Name" value={newName} onChange={(event)=> setName(event.target.value)}/>
                        </div>
                        <div className={` ${props.mode ? 'Lightaddexpense' : 'Darkaddexpense'} `}>
                            <input required type="number" placeholder="Update Cost" value={newAmount} onChange={(event)=> setAmount(event.target.value)}/>
                        </div>
                        <div className={` ${props.mode ? 'Lightaddexpense' : 'Darkaddexpense'} `}>
                            <button onClick={(event)=> {event.preventDefault(); handleTransactionUpdate() }}>Update Expense</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ViewExpenseList;