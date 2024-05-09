import { useState } from "react";
import './Counter.css';

function Counter() {
    const [x, setX] = useState(0);
    const [count, setCount] = useState(10);
    return (
        <div className="counter">
            <span id="counterValue">{x}</span>
            <br />
            <button className= "button1" onClick={ () => setX(x+1)}>Incremented By 1</button>
            <button className= "button2" onClick={ () => setX(x-1)}>Decremented By 1</button><br />
            <br />
            <br />

            <span id="counterValue">{count}</span>
            <br />
            <button className= "button1" onClick={ () => setCount(count+10)}>Incremented By 10</button>
            <button className= "button2" onClick={ () => setCount(count-10)}>Decremented By 10</button>
        </div>
    )
}

export default Counter;