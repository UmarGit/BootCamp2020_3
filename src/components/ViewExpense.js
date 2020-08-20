import React from 'react'
import ViewExpenseList from './ViewExpenseList'

function ViewExpense(props) {
    return(
        <div>
            <p>History</p>
            <hr/>
            <ViewExpenseList mode={props.mode}/>
        </div>
    )
}

export default ViewExpense;