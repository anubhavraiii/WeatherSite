import './Product.css'
import Price from './Price';

function Product({title,idx}){
    let oldPrices = ["12999","11999", "2999" , "599"]
    let newPrices = ["9999","8999", "1999" , "299"]
    let descriptions = [["8000 DPI", "5 Gaming Buttons"],["Designed for iPad","Bluetooth 6.0"], ["Blue Key Mechanical", "2 Year Warranty"] , ["1600 DPI", "RGB Lights"]]

    return (
        <div className="Product" >
            <h3>{title}</h3>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product