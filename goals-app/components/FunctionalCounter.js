import { useState } from "react" //import hook

function FunctionalCounter() {
    const [counter, setCounter] = useState(0); //assign variable and function to hook, with initialized variable
    
    const increment = () => {
         setCounter(counter + 1);
    }

    const decrement = () => {
            setCounter(counter - 1)
    }

    return (
        <div>
            <h2>Functional Counter</h2>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default FunctionalCounter