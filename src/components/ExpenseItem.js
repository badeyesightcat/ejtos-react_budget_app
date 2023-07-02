import React, { useContext } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiTwotoneDelete } from "react-icons/ai"; 
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

    const decreaseAllocation = (name) => {
        const expense = {
            name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td className='has-button'><AiFillPlusCircle size='1.5rem' color="#51af5f" onClick={e => increaseAllocation(props.name)} /></td>
        <td className='has-button'><AiFillMinusCircle size='1.5rem' color="#b01f12" onClick={e => decreaseAllocation(props.name)} /></td>
        <td className='has-button'><AiTwotoneDelete size='1.5em' onClick={handleDeleteExpense} /></td>
    </tr>;
};

export default ExpenseItem;
