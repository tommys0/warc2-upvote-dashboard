import React, { useState } from 'react';

const Upvote = () => {
        const [count, setCount] = useState(0);

        const increment = () => {
                setCount(count + 1)
        }


        const decrement = () => {
                if (count > 0) {
                        setCount(count - 1)
                }
        }

        return (
            <div>
                    <button onClick={increment}>
                            Increment
                    </button>
                    <button onClick={decrement}>
                            Decrement
                    </button>
                    <div>{count}</div>
            </div>
        )
}

export default Upvote;