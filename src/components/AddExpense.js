import React, {useContext, useState} from 'react'
import {TransactionContext} from '../store/globalContext'

function AddExpense(props) {

    let {addTransaction} = useContext(TransactionContext)
    let today = Date();
    let [newName, setName] = useState('');
    let [newAmount, setAmount] = useState('');
    const handleTransactionAdd = (event)=>{
        event.preventDefault();
        addTransaction({
            name: newName,
            amount: newAmount,
            date: today.slice(16,24) 
        })
        setName('')
        setAmount('')
    }
    return(
        <div>
            <p>AddExpense</p>
            <hr/>
            <div>
                <form onSubmit={handleTransactionAdd}>
                    <div className={` ${props.mode ? 'Lightaddexpense' : 'Darkaddexpense'} `}>
                        <input required type="text" placeholder="Add Name" value={newName} onChange={(event)=> setName(event.target.value)}/>
                    </div>
                    <div className={` ${props.mode ? 'Lightaddexpense' : 'Darkaddexpense'} `}>
                        <input required type="number" placeholder="Add Cost" value={newAmount} onChange={(event)=> setAmount(event.target.value)}/>
                    </div>
                    <div className={` ${props.mode ? 'Lightaddexpense' : 'Darkaddexpense'} `}>
                    <button>Add Expense</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpense;