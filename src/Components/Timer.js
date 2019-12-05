import React, { useState, useEffect } from 'react'
const SECONDS = 10;

const Timer = () => {
    const [time, setTime] = useState(SECONDS * 1000);
    const [timerId, setTimerId] = useState();

    const updateTimer = () => {
        console.log('updating... ', time)
        setTime(time => {
            if(time) return time - 1000;
            return 0;
        })};

    const startTimer = () => {
        clearInterval(timerId);
        const newTimerId = setInterval(updateTimer, 1000)
        setTimerId(newTimerId);
    }

    const stopTimer = () => clearInterval(timerId)

    const reset = () => {
        setTime(SECONDS * 1000);
    }

    useEffect(startTimer, [])

    useEffect(() => {
        console.log(time)
        if (!time) {
            clearInterval(timerId)
        }
    },[time, timerId])
    return (
        <>
            Time Remaining {time / 1000} seconds
            <button onClick={stopTimer}>Stop Timer</button>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Timer;