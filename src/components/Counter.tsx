import React from 'react';
import * as classes from  './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }


    return (
        <div>
            <h1>Counter {count}</h1>
            <button className={classes.btn} onClick={increment}>Counter</button>
        </div>
    );
};

export default Counter;
