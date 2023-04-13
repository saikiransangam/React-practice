import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    return (
        <div className="expense-form">
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter description" value={props.description} onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control" id="amount" placeholder="Enter amount" value={props.amount} onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter date" value={props.date} onChange={props.handleChange} />
                </div>
            </form>
        </div>
    )

};

export default ExpenseForm;