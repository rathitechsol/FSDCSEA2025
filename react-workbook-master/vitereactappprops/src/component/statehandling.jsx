import React, { useState } from 'react'

function StateHandling() {
    const [counter, setCounter] = useState(20)

    function increase() {
        setCounter(counter + 5)
    }

    return (
        <div>
            <h2>Counter Value = {counter}</h2>
            <button onClick={increase}>Increase +5</button>
        </div>
    )
}

export default StateHandling