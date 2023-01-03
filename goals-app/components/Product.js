export default function Product() {
    const products = [ //add unique IDs in array of objects
        {id: 1, name: 'Laptop', price: 750},
        {id: 2, name: 'Phone', price: 200},
        {id: 3, name: 'Tablet', price: 450},
        {id: 4, name: 'Computer', price: 1950},
        {id: 5, name: 'Mouse', price: 30},
        {id: 6, name: 'Keyboard', price: 20},
        {id: 7, name: 'Laptop', price: 450}
    ];
    const productList = <ul>{products.map(product => <li key={product.id}>{product.name}: €{product.price}</li>)}</ul>

    const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
    const fruitList = <ul>{fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}</ul> //add unique ID in array of values

    return (
    <div>
        <h2>List of products</h2>
        {productList}

        <h2>List of fruits</h2>
        {fruitList}
    </div>
    )
}