import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currencyList = [
    { name: 'dollar', unit: '$' },
    { name: 'pound', unit: '￡' },
    { name: 'euro', unit: '€' },
    { name: 'rupee', unit: '₹' },
];
const Currency = () => {
    const { currency } = useContext(AppContext); // , dispatch

    const chosenCurrency = currencyList.find(item => item.unit === currency);

    return <select>
        <option defaultValue style={{ textTransform: 'capitalize' }}>Currency({chosenCurrency.unit} {chosenCurrency.name})</option>
        {currencyList.map(item => <option value={item.unit} key={item.name} style={{ textTransform: 'capitalize' }}>{item.unit} {item.name}</option>)}
    </select>
};

export default Currency;