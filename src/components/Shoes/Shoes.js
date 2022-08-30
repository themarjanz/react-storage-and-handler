import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);

    return (
        <div>
            <h1>This is Shoes Compo</h1>
            <p>Result: {result}</p>
        </div>
    );
};

export default Shoes;