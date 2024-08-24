import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const addCount = () => setCount(count + 1);

    const removeCount = () => {
        if (count > 0)
            setCount(count - 1)
    };

    const resetCounter = () => setCount(0);
    return (
        <div className='flex-col space-y-4'>

            <div className='flex space-x-4'>
                <button onClick={addCount}>+</button>
                <div><p>{count}</p></div>
                <button onClick={removeCount}>-</button>
            </div>
            
            <button onClick={resetCounter}>Reset Counter</button>
        </div>
    )
}

export default Counter
