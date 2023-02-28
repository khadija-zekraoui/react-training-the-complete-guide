import React from 'react';


// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
function App() {
    let [price,setPrice] = React.useState(100);
    const discountHandler = () => {
        setPrice(75);
    }
    return (
        <div>
            <p>${price}</p>
            <button onClick={discountHandler}>Apply Discount</button>
        </div>
    );
}

export default App;
