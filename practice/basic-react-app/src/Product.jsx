import "./Product.css"
function Product({ title, price}) {
    console.log(price.ob2);
    return <div className="Product">
        <h3>{title}</h3>
    </div>
}
export default Product