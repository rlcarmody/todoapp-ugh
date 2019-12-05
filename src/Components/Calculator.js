import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState();


    return (
        <>
            <div>a: <input onChange={e => setNum1(parseFloat(e.target.value))} value={num1} /></div>
            <div>b: <input onChange={e => setNum2(parseFloat(e.target.value))} value={num2} /></div>
            <button type="button" onClick={() => setResult(num1 + num2)}>add</button>
            <button type="button" onClick={() => setResult(num1 - num2)}>subtract</button>
            <div>The results is {result}</div>
        </>
    )
}

export default Calculator;