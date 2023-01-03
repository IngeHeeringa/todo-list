import { useState } from "react"

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true);

    const toggle = () => {
        setDisplay(display === false)
    }

    //TERNARY OPERATOR
    return display ? (
        <div><h2>This is a Conditional Component</h2>
        <button onClick={toggle}>Toggle</button></div> //you can also display other components instead of jsx (nesting)
    ) : (
        <div><h2>Nothing to see here</h2>
        <button onClick={toggle}>Toggle</button></div>
    );

    //IF ELSE
    // let output; //element variable to prevent multiple return statements
    // const toggle = () => {
    //     setDisplay(display === false)
    // }


    // if (display) {
    //     output = <div><h2>This is a Conditional Component</h2></div> //you can also display other components instead of jsx (nesting)
    // } else {
    //     output = <div><h2>Nothing to see here</h2></div>
    // }

    // return (
    //     <div>
    //         {output}
    //         <button onClick={toggle}>Toggle</button>
    //     </div>)
}