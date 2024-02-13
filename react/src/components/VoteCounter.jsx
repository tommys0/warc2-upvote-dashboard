import React, { useState } from 'react';

const VoteCounter = () => {
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
                            Upvote
                    </button>
                    <button onClick={decrement}>
                            Downvote
                    </button>
                    <div>{count}</div>
            </div>
        )
}

export default VoteCounter;