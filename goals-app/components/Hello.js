function Hello(props){
    const { name, lastname } = props; //destructuring props for cleaner code

    return (
    <div><h1>Hello {name} {lastname}!</h1></div>)
}

export default Hello;