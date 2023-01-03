function FunctionEvent() { //eventhandling in react

    const handleClick = () => {
        console.log('Button is clicked')
    };

    return (
        <div>
            <h2>Functional Component</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default FunctionEvent;