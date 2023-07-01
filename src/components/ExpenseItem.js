import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td><TiPlus size='1.5rem' onClick={e => increaseAllocation(props.name)} /></td>
        <td><TiMinus size='1.5rem' onClick={e => increaseAllocation(props.name)} /></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
    </tr>;
};

export default ExpenseItem;
