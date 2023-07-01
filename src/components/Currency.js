import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currencyList = [
    { name: 'Dollar', unit: '$' },
    { name: 'Pound', unit: '£' },
    { name: 'Euro', unit: '€' },
    { name: 'Rupee', unit: '₹' },
];
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const chosenCurrency = currencyList.find(item => item.unit === currency);

    const handleSetCurrency = (e) => {
        console.log(e.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    };

    return <select onChange={handleSetCurrency} className='select-currency'>
        <option defaultValue>Currency ({currency} {chosenCurrency.name})</option>
        {currencyList.map(item => <option value={item.unit} key={item.name}>
            {item.unit} {item.name}
        </option>)}
    </select>
};

export default Currency;