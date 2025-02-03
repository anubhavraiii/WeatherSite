import Product from  './Product.jsx'

function ProductTab(){
    let styles = {display : "flex", justifyContent: "space-between"};

    return (
        <div style={styles}>
            <Product title = "Logiteck Mx Master" idx = {0}/>
            <Product title = "Apple Pencil 2nd Gen" idx = {1}/>
            <Product title = "Zebronics Zeb-69" idx = {2}/>
            <Product title = "Portronics Toad 25" idx = {3}/>
        </div>
    );

}

export default ProductTab