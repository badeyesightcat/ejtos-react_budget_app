
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, current) => {
        return (total = total + current.cost);
    }, 0);

    const handleChangeBudget = (e) => {
        const changedBudget = e.target.value;
        if (parseInt(changedBudget, 10) > 20000) {
            alert(`The budget value cannot exceed ${currency}20,000`);
            return;
        }
        if (parseInt(changedBudget, 10) < totalExpenses) {
            alert(`The budget value cannot be lower than the spent ${currency}${totalExpenses}`);
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(changedBudget),
        });
    };

    return <div className="alert alert-secondary">
        <span>Budget: {currency} <input value={budget} type='number' step={10} onChange={handleChangeBudget} /></span>
    </div>;
};

export default Budget;